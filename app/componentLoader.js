(function(ko, $) {

  var PATHS = Object.freeze{
    COMPONENTS: "/app/components/"
  };

  var customComponentLoader = {
    getConfig: function(name, cb) {
      var config = {
        template: { path: PATHS.COMPONENTS + name + ".tmpl.html" },
        viewModel: { path: PATHS.COMPONENTS + name + ".js" }
      }
    },
    loadTemplate: function(name, templateConfig, callback) {
      var path = templateConfig.path;
      if (path == null) {
        return;
      }

      $.get(path, function(markupString) {
        ko.components.defaultLoader.loadTemplate(name, markupString, callback);
      });
    },
    loadViewModel: function(name, viewModelConfig, callback) {
      var path = viewModelConfig.path;
      if (path == null) {
        return;
      }

      $.get(path, function(markupString) {
        var viewModel = eval(markupString);
        ko.components.defaultLoader.loadViewModel(name, viewModel, callback);
      });
    }
  };

  ko.components.loaders.unshift(customComponentLoader);

})(ko, jQuery);
