import { useState } from "react";
import "./test.css";
import Map from "./map";
import Layers from "../Layers/layers";
import TileLayer from "../Layers/TileLayer/tile-layer";
import VectorLayer from "../Layers/VectorLayer/vector-layer";
import { Circle as CircleStyle, Fill, Stroke, Style } from "ol/style";
import { osm, vector } from "../Source";
import { fromLonLat, get } from "ol/proj";
import GeoJSON from "ol/format/GeoJSON";
import MapControls from "../MapControls/map-controls";
// import FullScreenControl from "../MapControls/FullScreenControl/full-screen-control";
import mapConfig from "../utils/map-config.json";
import ZoomInOutControls from "../MapControls/ZoomInOutControls/zoom-in-out-controls";
import GeolocationControl from "../MapControls/GeolocationControl/geolocation-control";

let styles = {
  MultiPolygon: new Style({
    stroke: new Stroke({
      color: "#4F6B72",
      width: 1,
    }),
    fill: new Fill({
      color: "#97BBB4",
    }),
  }),
};
const geojsonObject = mapConfig.geojsonObject;
const geojsonObject2 = mapConfig.geojsonObject2;

const Test = () => {
  const [center, setCenter] = useState([-94.9065, 38.9884]);
  const [zoom, setZoom] = useState(9);
  const [showLayer1, setShowLayer1] = useState(true);
  const [showLayer2, setShowLayer2] = useState(true);

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  function showPosition(position) {
    setCenter([position.coords.longitude, position.coords.latitude]);
    setZoom(14);
  }

  return (
    <div className="test">
      <Map center={fromLonLat(center)} zoom={zoom}>
        <Layers>
          <TileLayer source={osm()} zIndex={0} />
          {showLayer1 && (
            <VectorLayer
              source={vector({
                features: new GeoJSON().readFeatures(geojsonObject, {
                  featureProjection: get("EPSG:3857"),
                }),
              })}
              style={styles.MultiPolygon}
            />
          )}
          {showLayer2 && (
            <VectorLayer
              source={vector({
                features: new GeoJSON().readFeatures(geojsonObject2, {
                  featureProjection: get("EPSG:3857"),
                }),
              })}
              style={styles.MultiPolygon}
            />
          )}
        </Layers>
        <MapControls>
          <ZoomInOutControls />
          <GeolocationControl onClick={getLocation} />
        </MapControls>
      </Map>
      <div className="testCity">
        <input
          type="checkbox"
          checked={showLayer1}
          onChange={(event) => setShowLayer1(event.target.checked)}
        />{" "}
        Johnson County
      </div>
      <div className="testCity">
        <input
          type="checkbox"
          checked={showLayer2}
          onChange={(event) => setShowLayer2(event.target.checked)}
        />{" "}
        Wyandotte County
      </div>
    </div>
  );
};
export default Test;
