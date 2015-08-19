
var DataTile = function(tileX, tileY, zoom) {
  this.tileX = tileX;
  this.tileY = tileY;
  this.zoom = zoom;
};

DataTile.prototype = {

  load: function(url) {
    this.mesh = new OSMBuildingsGL.mesh.GeoJSON(url);
  },

  destroy: function() {
    if (this.mesh) {
      this.mesh.destroy();
      this.mesh = null;
    }
  }
};
