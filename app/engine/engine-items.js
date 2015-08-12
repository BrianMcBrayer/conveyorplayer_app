var app = (function(me) {
  me.engine = (function(me) {

    var _itemUID = 0;
    var numberOfCreatedItems = 0;

    me.items = ko.observableArray();

    function createItem() {
      me.items.push(
        new app.engine.Item('item' + _itemUID++, 'ball')
      );

      if (numberOfCreatedItems++ > 6) {
        me.offTick(createItem);
      }
    }

    me.onTick(createItem, 60);

    return me;
  })(me.engine);

  return me;
})(window.app);
