(function() {
  function viewModel (params) {
    var cleanParams = (params == null ? {} : params);
    var me = this;
    debugger;
    me.id = cleanParams.id;
    me.text = cleanParams.text;
    me.activate = cleanParams.activate;

    me.clicked = function() {
      me.activate(me);
    }
  }

  return viewModel;
})();
