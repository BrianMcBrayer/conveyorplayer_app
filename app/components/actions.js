(function(ko, $) {

  ko.components.register('actions', {
    viewModel: function(params) {
      console.log('foo yeah!');
    },
    template: $.get('/app/components/actions.tmpl.html')
  });

})(ko, jQuery);
