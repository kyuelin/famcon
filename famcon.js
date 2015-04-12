if (Meteor.isClient) {
  Template.body.helpers({
    coords: [
      { pos : "(Latitude, Longitude, Accuracy, Timestamp) = (40.7619316,-73.7889575,477,1428814097904)" }
    ]
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
