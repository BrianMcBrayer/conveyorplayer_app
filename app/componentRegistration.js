(function(ko) {

  ko.components.register('action', {
    viewModel: function() {
      if (params.text === null) {
        throw new Error("Cannot have action without text!");
      }

      this.text = ko.observable(params.text)
    },
    template: '<span data-bind="text: text()"></span>'
  });

})(ko);
