window.app = (function(me, ko, radio) {
  me.start = start;

  function start() {
    var app = window.app;

    ko.applyBindings(app);

    app.engine.conveyor.start();
    app.engine.conveyor.itemsFactory.start();
  }

  return me;
})(window.app || {}, ko, radio);
