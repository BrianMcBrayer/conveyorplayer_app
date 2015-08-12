(function() {
  function viewModel (params) {
    var cleanParams = (params == null ? {} : params);
    var allArgs = {
      actions: cleanParams.actions || []
    };

    this.actions = allArgs.actions;
  }

  return viewModel;
})();
