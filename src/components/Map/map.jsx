import styles from "./map.module.css";
import MapContext from "./MapContext/map-context";
import * as ol from "ol";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { SET_COORDINATES } from "../../services/actions/map";

const Map = ({ children, zoom, center, element, position }) => {
  const mapRef = useRef();
  const dispatch = useDispatch();
  const [map, setMap] = useState(null);

  const overlay = new ol.Overlay({
    element: element && element,
    position: position && position,
    stopEvent: false,
    autoPan: {
      animation: {
        duration: 250,
      },
    },
  });

  useEffect(() => {
    let options = {
      view: new ol.View({ zoom, center }),
      layers: [],
      controls: [],
      overlays: [overlay && overlay],
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

  const getCoordinates = () => {
    map.on("click", (e) => {
      const coordinate = e.coordinate;
      coordinate &&
        dispatch({
          type: SET_COORDINATES,
          payload: coordinate,
        });
    });
    overlay && map.addOverlay(overlay);
  };

  return (
    <MapContext.Provider value={{ map }}>
      <div
        ref={mapRef}
        className={styles.olMap}
        onClick={(e) => getCoordinates(e)}
      >
        {children}
      </div>
    </MapContext.Provider>
  );
};
export default Map;
