var app = (function(me) {
  me.engine = (function(me) {

    var TOPICS = Object.freeze({
      activateAction: "actAct"
    });

    me.actions = ko.observableArray([
        { id: "inflate-action", text: "Inflate" },
        { id: "wrap-action", text: "Wrap" }
      ]);
    me.items = [];

    radio(TOPICS.activateAction).subscribe(activateAction);

    function activateAction(action) {
      console.log("Activated Action");
      console.dir(action);
    }

    return me;
  })(me.engine || {});

  return me;
})(window.app || {});
