(function(ko) {

  var engine = (function() {

    var TOPICS = Object.freeze({
      activateAction: "actAct"
    });

    var service = {
      actions: ko.observableArray([
        { id: "inflate-action", text: "Inflate" },
        { id: "wrap-action", text: "Wrap" }
      ]),
      items: []
    };

    radio(TOPICS.activateAction).subscribe(activateAction);

    function activateAction(action) {
      console.log("Activated Action");
      console.dir(action);
    }

    return service;
  })();

  var app = {
    engine: engine
  };

  ko.applyBindings(app);
})(ko);
