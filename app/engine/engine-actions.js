var app = (function(me) {
  me.engine = (function(me) {

    var activeAction;

    me.actions = ko.observableArray([
        { id: "inflate-action", text: "Inflate" },
        { id: "wrap-action", text: "Wrap" }
      ]);
    me.activateAction = activateAction;

    function activateAction(action) {
      action.active = true;
      activateAction = action;
    }

    return me;
  })(me.engine || {});

  return me;
})(window.app);
