var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var port = 3000;
var airplaneCtrl = require('./controller');

var app =/* module.exports = */express();
app.use(bodyParser.json());
app.use(cors());

var connectionString = "postgres://postgres:admin@localhost/Sandbox";
var instance = massive.connectSync({
  connectionString: connectionString
});

app.set('db', instance);

//moved to controller.js
// var db = app.get('db');

// db.new_plane(function(err, planes) {
//   console.log(err, 'planes added', planes);
// })

// db.get_planes(function(err, planes) {
//   console.log(err, 'get planes', planes);
// })

airplaneCtrl.getPlanes(app);
airplaneCtrl.filterPlanes(app, 25);
airplaneCtrl.filterPlanes(app, 50);
airplaneCtrl.filterPlanes(app, 250);
airplaneCtrl.getPlane(app, 8);

app.listen(port, function(){
  console.log("Successfully listening on : " + port);
})
