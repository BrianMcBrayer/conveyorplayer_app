var app = (function(me) {
  me.engine = (function(me) {

    var _itemUID = 0;
    var numberOfCreatedItems = 0;

    var movementOffset = 5;

    var conveyorSpeed = 50; // * 50 ms
    var speedupOffset = 100;

    init();

    function init() {
      me.items = ko.observableArray();
      me.createItem = createItem;

      me.onTick(moveConveyor, conveyorSpeed);
      me.onTick(speedUpConveyor, speedupOffset);
    }

    function createItem(type) {
      me.items.push(
        new app.engine.Item('item' + _itemUID++, type)
      );
    }

    function moveConveyor() {
      me.items().forEach(moveSingleItem);
    }

    function speedUpConveyor() {
      var speed = Math.floor(conveyorSpeed * 0.9);

      if (speed < 1) {
        speed = 1;
      }

      conveyorSpeed = speed;

      me.offTick(moveConveyor);
      me.onTick(moveConveyor, conveyorSpeed);
    }

    function moveSingleItem(item) {
      item.xpos(item.xpos() + movementOffset);

      if (item.xpos() > me.gameportWidth()) {
        // Item is gone
        me.items.remove(item);
      }
    }

    return me;
  })(me.engine);

  return me;
})(window.app);
