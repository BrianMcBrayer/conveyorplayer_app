var app = (function(me) {
  me.engine = (function(me) {

    me.actions = ko.observableArray([
      new app.engine.Action('inflate-action', 'Inflate', function() { console.log('inflated'); }),
      new app.engine.Action('wrap-action', 'Wrap', function() { console.log('wrapped'); })
      ]);
    me.activateAction = activateAction;
    me.activeAction = ko.observable();

    function activateAction(action) {
      me.activeAction(action);
    }

    return me;
  })(me.engine || {});

  return me;
})(window.app);
