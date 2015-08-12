window.app = (function(me, ko, radio) {

  me.start = start;

  function start() {
    ko.applyBindings(me);

    // Create a few items
    var creationSpeedMinimum = 200;

    me.engine.onTick(function() {
      creationSpeedMinimum *= .9;

      if (creationSpeedMinimum < 50) {
        creationSpeedMinimum = 50;
      }      
    }, 30);

    function createItemAtRandomTime() {
      me.engine.oneTick(function() {
          me.engine.createItem('ball');

          createItemAtRandomTime();
      }, Math.floor(Math.random() * (creationSpeedMinimum * 1.5)) + creationSpeedMinimum);
    }

    createItemAtRandomTime();
  }

  return me;
})(window.app || {}, ko, radio);
