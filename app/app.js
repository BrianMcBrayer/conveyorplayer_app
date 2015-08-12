window.app = (function(me, ko, radio) {

  me.start = start;

  function start() {
    ko.applyBindings(me);

    // Create a few items
    function createItemAtRandomTime() {
      me.engine.oneTick(function() {
          me.engine.createItem('ball');

          createItemAtRandomTime();
      }, Math.floor(Math.random() * 180) + 60);
    }

    createItemAtRandomTime();
  }

  return me;
})(window.app || {}, ko, radio);
