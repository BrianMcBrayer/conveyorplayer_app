var app = (function(me) {
  me.engine = (function(me) {

    var _itemUID = 0;
    var numberOfCreatedItems = 0;

    var movementOffset = 5;

    me.items = ko.observableArray();

    function createItem() {
      me.items.push(
        new app.engine.Item('item' + _itemUID++, 'ball')
      );

      if (numberOfCreatedItems++ === 3) {
        me.offTick(createItem);
      }
    }

    function moveConveyor() {
      me.items().forEach(moveSingleItem);
    }

    function moveSingleItem(item) {
      item.xpos(item.xpos() + movementOffset);

      if (item.xpos() > me.gameportWidth()) {
        // Item is gone
        me.items.remove(item);
      }
    }

    me.onTick(createItem, 30);
    me.onTick(moveConveyor, 5);

    return me;
  })(me.engine);

  return me;
})(window.app);
