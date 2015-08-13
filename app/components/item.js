(function(engine) {
  function viewModel(params) {
    var me = this;

    me.text = params.text;

    me.clicked = function() {
      engine.selectItem(params.item);
    }
  }

  return viewModel;
})(app.engine);
