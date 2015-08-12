(function(ko) {

  var engine = {

  };

  var app = {
    engine: engine,
    actions: ko.observableArray([
      { id: "inflate-action", text: "Inflate" },
      { id: "wrap-action", text: "Wrap" }
    ]),
    items: []
  };

  ko.applyBindings(app);
})(ko);
