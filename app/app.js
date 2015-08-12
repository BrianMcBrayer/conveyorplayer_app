(function(ko) {

  var engine = {

  };

  var app = {
    engine: engine,
    actions: ko.observableArray([
      { id: "inflate-action", text: "Inflate" }
    ]),
    items: []
  };

  ko.applyBindings(app);
})(ko);
