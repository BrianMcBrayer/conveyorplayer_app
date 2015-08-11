ko.components.register('action', {
  viewModel: (function() {
    var numInstances = 0;

    return function() {
      console.log('foo ', numInstances);
    }
  })(),
  template: '<span>Test</span>'
});
