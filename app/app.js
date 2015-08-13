window.app = (function(me, ko, radio) {
  me.start = start;

  function start() {
    var app = window.app;

    ko.applyBindings(app);

    app.engine.conveyor.start();
    app.engine.conveyor.itemFactory.start();

    var conInc = 0,
        itemInc = 0;
    setInterval(function() {
      console.log('speed up conveyor');
      conInc++;
      app.engine.conveyor.requestSpeedIncrease();
    }, 2500);

    setInterval(function() {
      console.log('speed up items');
      itemInc++;
      app.engine.conveyor.itemFactory.requestSpeedIncrease();
    }, 5000);
  }

  return me;
})(window.app || {}, ko, radio);
