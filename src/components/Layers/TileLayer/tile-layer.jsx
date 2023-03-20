import { useContext, useEffect } from "react";
import MapContext from "../../Map/MapContext/map-context";
import OLTileLayer from "ol/layer/Tile";
import { toStringHDMS } from "ol/coordinate";
import { toLonLat } from "ol/proj";

const TileLayer = ({ source, zIndex = 0 }) => {
  const { map } = useContext(MapContext);

  useEffect(() => {
    if (!map) return;
    let tileLayer = new OLTileLayer({
      source,
      zIndex,
    });
    map.addLayer(tileLayer);
    tileLayer.setZIndex(zIndex);
    return () => {
      if (map) {
        map.removeLayer(tileLayer);
      }
    };
  }, [map]);
  return null;
};

export default TileLayer;
