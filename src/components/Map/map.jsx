import styles from "./map.module.css";
import MapContext from "./MapContext/map-context";
import * as ol from "ol";
import { useEffect, useMemo, useRef, useState } from "react";
import Popup from "../ui/Popup/popup";

const Map = ({ children, zoom, center }) => {
  const mapRef = useRef();
  const [map, setMap] = useState(null);
  const [popup, setPopup] = useState();
  const [popupCloseBtn, setPopupCloseBtn] = useState();
  const [mapCoordinates, setMapCoordinates] = useState([]);

  const overlay = useMemo(() => {
    return new ol.Overlay({
      element: popup,
      position: mapCoordinates,
      stopEvent: false,
      autoPan: {
        animation: {
          duration: 250,
        },
      },
    });
  }, [popup, mapCoordinates]);

  useEffect(() => {
    let options = {
      view: new ol.View({ zoom, center }),
      layers: [],
      controls: [],
      overlays: [overlay],
    };
    let mapObject = new ol.Map(options);
    mapObject.setTarget(mapRef.current);
    setMap(mapObject);
    return () => mapObject.setTarget(undefined);
  }, []);
  // zoom change handler
  useEffect(() => {
    if (!map) return;
    // console.log( overlay.values_?.position.length)
    console.log(overlay.values_?.position.length)
     console.log(overlay.options?.element)
    if(!overlay.values_?.position.length &&
      overlay.options?.element) return 
      console.log(!overlay.values_?.position.length &&
      overlay.options?.element)
      map.addOverlay(overlay);
      console.log('set')
  }, [mapCoordinates, popup, overlay.values?.position, map, overlay.options?.element]);
  useEffect(() => {
    if (!map) return;
    map.getView().setZoom(zoom);
  }, [zoom]);

  useEffect(() => {
    if (!map) return;
    map.getView().setZoom(zoom);
  }, [zoom]);
  useEffect(() => {
    if (!map) return;
    map.getView().setCenter(center);
  }, [center]);

  const getCoordinates = (e) => {
    map.on("singleclick", (e) => {
      const coordinate = e.coordinate;
      coordinate && setMapCoordinates(coordinate);
    });
  };

  const closePopup = (e) => {
    e.target === popupCloseBtn && map && map.removeOverlay(overlay);
  };

  return (
    <MapContext.Provider value={{ map }}>
      <>
        {
          <Popup
            setPopupCloseBtn={setPopupCloseBtn}
            setPopup={setPopup}
            forestSquare="12 345 кв.м."
            closePopup={closePopup}
          />
        }
        <div
          ref={mapRef}
          className={styles.olMap}
          onClick={(e) => {
            getCoordinates(e);
          }}
        >
          {children}
        </div>
      </>
    </MapContext.Provider>
  );
};
export default Map;
