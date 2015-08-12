(function(ko) {

  var engine = {

  };

  var app = {
    engine: engine,
    actions: [
      {
        id: "inflate-action",
        text: "Inflate"
      }
    ],
    items: []
  };

  ko.applyBindings(app);
})(ko);
