var app = (function(me) {
  me.engine = (function(me) {
    me.conveyor = (function(me) {
      me.itemFactory = (function(me) {

        var DEFAULTS = Object.freeze({
          CREATION_SPEED_MS: 5000
        });

        var _itemUID = 0;
        var shouldSpeedUp;
        var creationSpeedMS;
        var queueLoopID;

        init();

        function init() {
          me.start = start;
          me.stop = stop;
          me.reset = reset;

          me.requestSpeedIncrease = requestSpeedIncrease;

          reset();
        }

        function start() {
          queueCreateItem();
        }

        function stop() {
          clearTimeout(queueLoopID);
        }

        function requestSpeedIncrease() {
          shouldSpeedUp = true;
        }

        function reset() {
          shouldSpeedUp = false;
          creationSpeedMS = DEFAULTS.CREATION_SPEED_MS;
        }

        function queueCreateItem() {
          createNextItem();

          if (shouldSpeedUp) {
            shouldSpeedUp = false;
            performSpeedUpLogic();
          }

          queueLoopID = setTimeout(queueCreateItem, creationSpeedMS);
        }

        function performSpeedUpLogic() {
          creationSpeedMS *= 0.9;
        }

        function createNextItem() {
          var type;
          if (Math.random() * 10 > 5) {
            type = 'ball';
          } else {
            type = 'gift';
          }
          createItem(type);
        }

        function createItem(type) {
          app.engine.conveyor.items.push(
            new app.engine.conveyor.Item('item' + _itemUID++, type)
          );
        }

        return me;
      })(me.itemFactory || {});

      return me;
    })(me.conveyor);

    return me;
  })(me.engine);

  return me;
})(window.app);
