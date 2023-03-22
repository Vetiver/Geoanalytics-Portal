import styles from "./map.module.css";
import MapContext from "./MapContext/map-context";
import * as ol from "ol";
import { useEffect, useMemo, useRef, useState } from "react";
import Popup from "../ui/Popup/popup";

const Map = ({ children, zoom, center }) => {
  const mapRef = useRef();
  const [map, setMap] = useState(null);
  const [clickOnMapCoordinates, setCoordinates] = useState([]);
  const [popup, setPopup] = useState();
  const overlay = useMemo(() => {
    return new ol.Overlay({
      element: popup,
      position: clickOnMapCoordinates.length && clickOnMapCoordinates,
      stopEvent: true,
      autoPan: {
        animation: {
          duration: 250,
        },
      },
    });
  }, [popup, clickOnMapCoordinates]);

  const doesPopupExist = useMemo(() => {
    return overlay?.options && overlay?.options.element;
  }, [overlay]);

  useEffect(() => {
    let options = {
      view: new ol.View({ zoom, center }),
      layers: [],
      controls: [],
      overlays: [ overlay],
    };
    let mapObject = new ol.Map(options);
    mapObject.setTarget(mapRef.current);
    setMap(mapObject);
    return () => mapObject.setTarget(undefined);
  }, []);
  // zoom change handler
  useEffect(() => {
    if (!map) return;
    map.getView().setZoom(zoom);
  }, [zoom]);
  // center change handler
  useEffect(() => {
    if (!map) return;
    map.getView().setCenter(center);
  }, [center]);

  const setCoordinatesOnClick = () => {
    map.on("singleclick", (e) => {
      setCoordinates(e.coordinate);
    });
  };

  const setOverlay = (overlay) => {
    map.addOverlay(overlay);
  };

  const setPopupOnClick = () => {
    setCoordinatesOnClick();
    clickOnMapCoordinates && setOverlay(overlay);
    clickOnMapCoordinates && console.log("set");
  };

  return (
    <MapContext.Provider value={{ map }}>
      <Popup setPopup={setPopup} forestSquare="2443432" moreButton={true} />
      <div
        ref={mapRef}
        className={styles.olMap}
        onClick={(e) => setPopupOnClick(e)}
      >
        {children}
      </div>
    </MapContext.Provider>
  );
};
export default Map;
