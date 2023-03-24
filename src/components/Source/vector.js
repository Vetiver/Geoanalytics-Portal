import VectorTileSource from 'ol/source/VectorTile.js';

function vector({ features }) {
  return new VectorTileSource ({
    features
  });
}

export default vector;