var app = (function(me) {
  me.engine = (function(me) {

    function wrapAction(item) {
      if (item.type === 'gift') {
        item.color('red');
      }
    }

    function inflateAction(item) {
      if (item.type === 'ball') {
        item.color('green');
      }
    }

    me.actions = ko.observableArray([
      new app.engine.Action('inflate-action', 'Inflate', inflateAction),
      new app.engine.Action('wrap-action', 'Wrap', wrapAction)
      ]);
    me.activateAction = activateAction;
    me.selectItem = selectItem;
    me.activeAction = ko.observable();    

    function activateAction(action) {
      me.activeAction(action);
    }

    function selectItem(item) {
      var action = me.activeAction();
      if (action !== null && typeof(action.fn) === 'function') {
        action.fn(item);
      }
    }

    return me;
  })(me.engine || {});

  return me;
})(window.app);
