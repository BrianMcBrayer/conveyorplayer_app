(function(ko) {

  var app = (function(my) {
    my.appViewModel = (function(my) {

      my.appName = 'ConveyorPlayer';

      my.actionActivated = function(action) {

      };

      return my;
    })(my.appViewModel || {});

    return my;
  })(app || {});

  ko.applyBindings(app.appViewModel);
})(ko);
