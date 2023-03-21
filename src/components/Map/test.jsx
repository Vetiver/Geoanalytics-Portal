import { useState } from "react";
import { useSelector } from "react-redux";
import "./test.css";
import Map from "./map";
import Layers from "../Layers/layers";
import TileLayer from "../Layers/TileLayer/tile-layer";
import VectorLayer from "../Layers/VectorLayer/vector-layer";
import { Circle as  Fill, Stroke, Style } from "ol/style";
import { osm, vector } from "../Source";
import { fromLonLat, get } from "ol/proj";
import MapControls from "../MapControls/map-controls";
// import FullScreenControl from "../MapControls/FullScreenControl/full-screen-control";
import mapConfig from "../utils/map-config.json";
import CustomControl from "../ui/CustomController/custom-controller";
import { ControlStates, ControlTypes } from "../../constants/controls";
import { setDelayForAnimation } from "../utils/functions";
import VectorTileSource from 'ol/source/VectorTile.js';
import MVT from 'ol/format/MVT.js';

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
}

const geojsonObject = mapConfig.geojsonObject;
const geojsonObject2 = mapConfig.geojsonObject2;

const Test = () => {
  const forestCheck = useSelector(
    (state) => state.mapReducer.forestCheck
  );
  const agroCheck = useSelector(
    (state) => state.mapReducer.agroCheck
  );
  const [center, setCenter] = useState([39.1238, 51.4018]);
  const [zoom, setZoom] = useState(9);
  const [showLayer1, setShowLayer1] = useState(true);
  const [showLayer2, setShowLayer2] = useState(true);
  const [controlState, setControlState] = useState(ControlStates.Default);

  async function getLocation() {
    if (navigator.geolocation) {
      setControlState(ControlStates.Changing);
      navigator.geolocation.getCurrentPosition(showPosition);
      await setDelayForAnimation(2000);
      setControlState(ControlStates.Default);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  async function showPosition(position) {
    setCenter([position.coords.longitude, position.coords.latitude]);
    setZoom(12);
  }

  return (
    <div className="test">
      <Map center={fromLonLat(center)} zoom={zoom}>
        <Layers>
          <TileLayer source={osm()} zIndex={0} />
          {agroCheck && (
            <VectorLayer
              source={ new VectorTileSource({
                format: new MVT(),
                url: 'https://geoanalytics.ai/tiles/agro_vrn/{z}/{x}/{y}.pbf',
              })}
              style={styles.MultiPolygon}
              
            />
          )}
          {forestCheck && (
              <VectorLayer
              source={ new VectorTileSource({
                format: new MVT(),
                url: 'https://geoanalytics.ai/tiles/forest_vrn/{z}/{x}/{y}.pbf',
              })}
              style={styles.MultiPolygon}
            />
          )}
        </Layers>
        <MapControls>
          <CustomControl
            type={ControlTypes.ZoomIn}
            onClick={() => {
              setZoom(zoom + 1);
            }}
          />
          <CustomControl
            type={ControlTypes.ZoomOut}
            onClick={() => {
              setZoom(zoom - 1);
              console.log("click");
            }}
          />
          <CustomControl
            type={ControlTypes.Geolocation}
            onClick={getLocation}
            controlState={controlState}
          />
        </MapControls>
      </Map>
    </div>
  );
};
export default Test;