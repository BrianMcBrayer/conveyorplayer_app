window.app = (function(me, ko, radio) {
  me.start = start;

  function start() {
    var app = window.app;

    ko.applyBindings(app);

    app.engine.conveyor.start();
    app.engine.conveyor.itemFactory.start();

    setInterval(function() {
      app.engine.conveyor.shouldSpeedUp();
    }, 10000);

    setInterval(function() {
      app.engine.conveyor.itemFactory.shouldSpeedUp();
    }, 10000);
  }

  return me;
})(window.app || {}, ko, radio);
