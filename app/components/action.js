(function() {
  function viewModel (params) {
    var cleanParams = (params == null ? {} : params);

    this.id = cleanParams.id;
    this.text = cleanParams.text;

    this.clicked = function() {
      console.log('foo again');
    }
  }

  return viewModel;
})();
