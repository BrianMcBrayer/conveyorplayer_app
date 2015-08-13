(function(engine) {

  function viewModel(params) {
    var me = this;

    me.id = params.id;
    me.text = params.text;

    me.active = false;

    me.clicked = function() {
      engine.activateAction(me);
    }
  }

  return viewModel;
})(window.app.engine);
