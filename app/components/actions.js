(function() {
  function viewModel (params) {
    var cleanParams = (params == null ? {} : params);
    var allArgs = {
      actions: cleanParams.actions || []
    };
    console.dir(params);
    console.log("Foo, loaded all actions");
    console.log("actions length is ", allArgs.actions.length);
    this.actions = allArgs.actions;
  }

  return viewModel;
})();
