import { useContext, useEffect } from "react";
import MapContext from "../../Map/MapContext/map-context";
import VectorTileLayer from 'ol/layer/VectorTile.js';

const VectorLayer = ({ source, style, zIndex = 0 }) => {
  const { map } = useContext(MapContext);
  useEffect(() => {
    if (!map) return;
    let vectorLayer = new VectorTileLayer({
      source,
      style
    });
    map.addLayer(vectorLayer);
    vectorLayer.setZIndex(zIndex);
    return () => {
      if (map) {
        map.removeLayer(vectorLayer);
      }
    };
  }, [map]);
  return null;
};

export default VectorLayer;