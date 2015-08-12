var app = (function(me) {
  me.engine = (function(me) {

    var TYPE_TEXT = Object.freeze({
      'ball': 'Ball',
      'gift': 'Gift'
    });

    function Item(id, type) {
      this.id = id;
      this.type = type;
      this.text = TYPE_TEXT[this.type];
      this.xpos = ko.observable(0);
    }

    me.Item = Item;

    return me;
  })(me.engine);

  return me;
})(window.app);
