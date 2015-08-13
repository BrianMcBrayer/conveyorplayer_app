var app = (function(me) {
  me.engine = (function(me) {

    function wrapAction(item) {
      item.color('red');
    }

    function inflateAction(item) {
      item.color('green');
    }

    me.actions = ko.observableArray([
      new app.engine.Action('inflate-action', 'Inflate', inflateAction),
      new app.engine.Action('wrap-action', 'Wrap', wrapAction)
      ]);
    me.activateAction = activateAction;
    me.activeAction = ko.observable();

    function activateAction(action) {
      me.activeAction(action);
    }

    function itemSelected(item) {
      var action = me.activeAction();
      if (action !== null && typeof(action.fn) === 'function') {
        action.fn(item);
      }
    }

    return me;
  })(me.engine || {});

  return me;
})(window.app);
