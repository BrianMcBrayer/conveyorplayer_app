var app = (function(me) {
  me.engine = (function(me) {
    me.conveyor = (function(me) {

      var TYPE_TEXT = Object.freeze({
        'ball': 'Ball',
        'gift': 'Gift'
      });

      function Item(id, type) {
        var self = this;

        self.id = id;
        self.type = type;
        self.text = TYPE_TEXT[this.type];
        self.xpos = ko.observable(-50);
        self.style = ko.computed(function() {
          return {
            left: self.xpos() + 'px'
          };
        });
      }

      me.Item = Item;

      return me;
    })(me.conveyor || {});

    return me;
  })(me.engine);

  return me;
})(window.app);
