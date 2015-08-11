(function(ko, $) {

  ko.components.register('actions', {
    viewModel: function(params) {
      console.log('foo yeah!');
    },
    template: $.get('actions.tmpl.html')
  });

})(ko, jQuery);
