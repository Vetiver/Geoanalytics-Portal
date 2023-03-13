import "./zoom-in-out-controls.css";
import { useContext, useEffect } from "react";
import { Zoom } from "ol/control";
import MapContext from "../../Map/MapContext/map-context";

const ZoomInOutControls = () => {
  const { map } = useContext(MapContext);
  useEffect(() => {
    if (!map) return;
    let zoomInOutControls = new Zoom({});
    map.controls.push(zoomInOutControls);

    return () => map.controls.remove(zoomInOutControls);
  }, [map]);
  return null;
};
export default ZoomInOutControls;
