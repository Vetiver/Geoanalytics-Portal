import "./zoom-to-extent-control.css";
import { useContext, useEffect } from "react";
import { ZoomToExtent } from "ol/control";
import MapContext from "../../Map/MapContext/map-context";

const ZoomToExtentControl = () => {
  const { map } = useContext(MapContext);
  useEffect(() => {
    if (!map) return;
    let ZoomToExtentControl = new ZoomToExtent({
      extent: [37.9978661, 55.6639961, 37.9978661, 55.6639961],
    });
    map.controls.push(ZoomToExtentControl);

    return () => map.controls.remove(ZoomToExtentControl);
  }, [map]);
  return null;
};
export default ZoomToExtentControl;
