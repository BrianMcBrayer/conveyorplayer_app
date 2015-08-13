var app = (function(me) {
  me.engine = (function(me) {

    var activeAction;

    me.actions = ko.observableArray([
      new app.engine.Action('inflate-action', 'Inflate', function() { console.log('inflated'); }),
      new app.engine.Action('wrap-action', 'Wrap', function() { console.log('wrapped'); })
      ]);
    me.activateAction = activateAction;

    function activateAction(action) {
      action.active(true);
      activateAction = action;
    }

    return me;
  })(me.engine || {});

  return me;
})(window.app);
