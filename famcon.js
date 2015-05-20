Coords = new Mongo.Collection("coords");

if (Meteor.isClient) {
    Meteor.startup(function () {
        GoogleMaps.load();
    });
    Template.body.helpers({
        coords: function () {
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
                var pos = {
                    "latitude": position.coords.latitude,
                    "longitude": position.coords.longitude
                }
                Coords.insert(
                    pos
                    //createdAt: new Date(),
                    //co: position.coords
                    //position.coords
                    //position
                );
            }

            function noPosition(err) {
                console.warn('ERROR(' + err.code + '): ' + err.message);
            }

            getLocation();
            return false;
        }
    });

    Template.userprofile.helpers({
        email: function () {
//      return Meteor.user() && Meteor.user().username;
            return Meteor.user().emails[0].address;
        }
    });

    Template.body.helpers({
        exampleMapOptions: function () {
            // Make sure the maps API has loaded
            if (GoogleMaps.loaded()) {
                // Map initialization options
                var one = Coords.findOne();
                return {
                    //center: new google.maps.LatLng(-37.8136, 144.9631),
                    center: new google.maps.LatLng(one.latitude, one.longitude),
                    zoom: 8
                };
            }
        }
    });

    Template.body.onCreated(function () {
        // We can use the `ready` callback to interact with the map API once the map is ready.
        GoogleMaps.ready('exampleMap', function (map) {
            // Add a marker to the map once it's ready
            var marker = new google.maps.Marker({
                position: map.options.center,
                map: map.instance
            });
        });
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });

}


