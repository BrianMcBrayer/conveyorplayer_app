(function(engine) {

  function viewModel (params) {
    var cleanParams = (params == null ? {} : params);
    var me = this;

    me.id = cleanParams.id;
    me.text = cleanParams.text;

    me.clicked = function() {
      engine.activateAction(me);
    }
  }

  return viewModel;
})(window.app.engine);
