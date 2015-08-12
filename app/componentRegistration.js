(function(ko) {

  var autoComponents = [
    'actions',
    'action',
    'conveyor',
    'conveyor-belt'
  ];

  autoComponents.forEach(function(component) {
    ko.components.register(component, {});
  });

})(ko);
