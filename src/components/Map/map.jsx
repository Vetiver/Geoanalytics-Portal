import styles from "./map.module.css";
import MapContext from "./MapContext/map-context";
import * as ol from "ol";
import { useEffect, useRef, useState } from "react";

const Map = ({ children, zoom, center }) => {
  const mapRef = useRef();
  const [map, setMap] = useState(null);
  // on component mount
  useEffect(() => {
    let options = {
      view: new ol.View({ zoom, center }),
      layers: [],
      controls: [],
      overlays: [],
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
  return (
    <MapContext.Provider value={{ map }}>
      <div ref={mapRef} className={styles.olMap}>
        {children}
      </div>
    </MapContext.Provider>
  );
};
export default Map;
