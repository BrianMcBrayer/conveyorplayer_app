(function(ko) {

  var engine = {
    activateAction: function(action) {
      console.log("Activated Action");
      console.dir(action);
    },
    actions: ko.observableArray([
      { id: "inflate-action", text: "Inflate" },
      { id: "wrap-action", text: "Wrap" }
    ]),
    items: []
  };

  var app = {
    engine: engine
  };

  ko.applyBindings(app);
})(ko);
