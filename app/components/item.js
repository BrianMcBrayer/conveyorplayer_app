(function() {
  function viewModel(params) {
    var me = this;
    var vm = params.vm;

    me.text = vm.text;
    me.xpos = vm.xpos;    
  }

  return viewModel;
})();
