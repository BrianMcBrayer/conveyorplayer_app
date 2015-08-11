(function(ko) {

  ko.components.register('action', {
    viewModel: function(params) {
      if (params.text === null) {
        throw new Error("Cannot have action without text!");
      }

      this.text = ko.observable(params.text)
    },
    template: '<div data-bind="text: text()"></div>'
  });

})(ko);
