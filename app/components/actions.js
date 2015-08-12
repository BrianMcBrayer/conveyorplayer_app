(function() {
  function viewModel (params) {
    var cleanParams = (params == null ? {} : params);
    debugger;
    this.actions = cleanParams.actions;
    this.activateAction = cleanParams.activateAction;

  }

  return viewModel;
})();
