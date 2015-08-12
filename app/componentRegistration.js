(function(ko) {

  var autoComponents = [
    'actions',
    'action',
    'conveyor'
  ];

  autoComponents.forEach(function(component) {
    ko.components.register(component, {});
  });

})(ko);
