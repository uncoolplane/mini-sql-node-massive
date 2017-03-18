// var app = require('./index');

module.exports = {
  getPlanes: function(app) {
    var db = app.get('db');

    db.get_planes(function(err, planes) {
      console.log( planes);
    })
  },

  filterPlanes: function(app, passengercount) {
    var db = app.get('db');

    db.get_planes_filter([passengercount], function(err, planes) {
      console.log( passengercount, planes);
    })
  },

  getPlane : function(app, id) {
    var db = app.get('db');

    db.airplanes.findOne(id, function(err, airplane) {
      console.log(id, airplane);
    })
  }
}
