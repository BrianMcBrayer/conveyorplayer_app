(function(ko) {

  var autoComponents = [
    'actions',
    'action',
    'conveyor',
    'conveyor-belt',
    'item'
  ];

  autoComponents.forEach(function(component) {
    ko.components.register(component, {});
  });

})(ko);
