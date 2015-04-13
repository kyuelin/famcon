Coords = new Mongo.Collection("coords");

if (Meteor.isClient) {
  Template.body.helpers({
    coords: function() {
      return Coords.find({});
    }
  });

  Template.body.events({
    "click .butt1": function (event) {
      function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition, noPosition);
        }
      }
      function showPosition(position) {
        var pos = "(Latitude, Longitude, Accuracy, Timestamp) = ("
            + position.coords.latitude + ","
            + position.coords.longitude + ","
            + position.coords.accuracy + ","
            + position.timestamp + ")";
        Coords.insert(
          //pos: pos,
          //createdAt: new Date(),
          //co: position.coords
          position.coords
          //position
        );
      }
      function noPosition(err) {
        console.warn('ERROR(' + err.code + '): ' + err.message);
      }
      getLocation();
      return false;
    }
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}


