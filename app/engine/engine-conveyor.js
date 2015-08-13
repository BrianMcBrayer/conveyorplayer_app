var app = (function(me) {
  me.engine = (function(me) {
    me.conveyor = (function(me) {

      var DEFAULTS = Object.freeze({
        MOVEMENT_SPEED_MS: 100
      });

      var movementOffset = 0.5;
      var shouldSpeedUp;
      var movementSpeedMS;
      var moveLoopID;

      init();

      function init() {
        me.items = ko.observableArray();

        me.start = start;
        me.stop = stop;
        me.reset = reset;
        me.requestSpeedIncrease = requestSpeedIncrease;

        reset();
      }

      function start() {
        queueMovement();
      }

      function stop() {
        clearTimeout(moveLoopID);
      }

      function requestSpeedIncrease() {
        shouldSpeedUp = true;
      }

      function reset() {
        shouldSpeedUp = false;
        movementSpeedMS = DEFAULTS.MOVEMENT_SPEED_MS;
      }

      function queueMovement() {
        moveConveyor();

        if (shouldSpeedUp) {
          shouldSpeedUp = false;
          performSpeedUpLogic();
        }

        moveLoopID = setTimeout(queueMovement, movementSpeedMS);
      }

      function performSpeedUpLogic() {
        movementSpeedMS *= 0.9;
      }

      function moveConveyor() {
        me.items().forEach(moveSingleItem);
      }

      function moveSingleItem(item) {
        var gameportWidth = app.engine.gameportWidth();

        item.xpos(item.xpos() + movementOffset);

        if (item.xpos() > gameportWidth) {
          // Item is gone
          me.items.remove(item);
        }
      }

      return me;
    })(me.conveyor || {});

    return me;
  })(me.engine || {});

  return me;
})(window.app);
