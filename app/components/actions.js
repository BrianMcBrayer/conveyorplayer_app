(function() {
  function viewModel (params) {
    var cleanParams = (params == null ? {} : params);

    this.actions = cleanParams.actions;
    this.activateAction = cleanParams.activateAction;

  }

  return viewModel;
})();
