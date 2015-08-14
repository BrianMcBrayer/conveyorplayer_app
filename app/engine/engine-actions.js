var app = (function(me) {
  me.engine = (function(me) {

    function wrapAction(item) {
      if (item.type === 'gift') {
        item.color('red');
        me.increaseScore('Wrapped gift!', 50);
      } else {
        me.decreaseScore('Can\'t wrap a ' + item.type, 25);
      }
    }

    function inflateAction(item) {
      if (item.type === 'ball') {
        item.color('green');
        me.increaseScore('Inflated ball!', 50);
      } else {
        me.decreaseScore('Can\'t inflate a ' + item.type, 25);
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
