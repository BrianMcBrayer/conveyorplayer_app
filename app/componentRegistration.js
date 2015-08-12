(function(ko) {

  var autoComponents = [
    'actions',
    'action'
  ];

  autoComponents.forEach(function(component) {
    ko.components.register(component, {});
  });

})(ko);
