(function() {

  function viewModel (params) {
    var cleanParams = (params == null ? {} : params);

    this.actions = cleanParams.actions;
  }

  return viewModel;
})();
