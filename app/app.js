window.app = (function(me, ko, radio) {

  me.start = start;

  function start() {
    ko.applyBindings(me);

    // Create a few items
    me.engine.onTick(function() {
      me.engine.createItem('ball');
    }, 60);

  }

  return me;
})(window.app || {}, ko, radio);
