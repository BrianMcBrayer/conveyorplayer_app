(function(radio) {
  function viewModel (params) {
    var cleanParams = (params == null ? {} : params);

    this.actions = cleanParams.actions;

    radio('actActRequest').subscribe(function(action) {
      radio('actAct').broadcast(action);
    });
  }

  return viewModel;
})(radio);
