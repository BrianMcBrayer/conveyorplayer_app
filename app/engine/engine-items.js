var app = (function(me) {
  me.engine = (function(me) {

    var _itemUID = 0;

    me.items = ko.observableArray();

    function createItem() {
      me.items.push({
        id: 'createdItem-' + _itemUID++,
        text: 'Ball'
      });
    }

    setInterval(createItem, 3000);

    return me;
  })(me.engine);

  return me;
})(window.app);
