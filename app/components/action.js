(function() {
  function viewModel (params) {
    var cleanParams = (params == null ? {} : params);
    var me = this;

    debugger;

    me.id = cleanParams.id;
    me.text = cleanParams.text;

    me.clicked = function() {
      cleanParams.activateAction(me);
    }
  }

  return viewModel;
})();
