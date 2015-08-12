(function(radio) {
  function viewModel (params) {
    var cleanParams = (params == null ? {} : params);
    var me = this;

    me.id = cleanParams.id;
    me.text = cleanParams.text;

    me.clicked = function() {
      radio('actActRequest').broadcast(me);
    }
  }

  return viewModel;
})(radio);
