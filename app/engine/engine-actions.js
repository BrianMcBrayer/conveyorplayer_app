var app = (function(me) {
  me.engine = (function(me) {

    me.actions = ko.observableArray([
        { id: "inflate-action", text: "Inflate" },
        { id: "wrap-action", text: "Wrap" }
      ]);
    me.activateAction = activateAction;

    function activateAction(action) {
      console.log("Activated!!!");
      console.dir(action);
    }

    return me;
  })(me.engine || {});

  return me;
})(window.app);
