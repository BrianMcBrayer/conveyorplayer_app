(function() {
  function viewModel(params) {
    var me = this;
    var vm = params.vm;

    me.text = vm.text;
    me.style = vm.style;    
  }

  return viewModel;
})();
