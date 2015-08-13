var app = (function(me) {
  me.engine = (function(me) {

    function Action(id, text, fn) {
      var self = this;

      self.id = id;
      self.text = text;
      self.fn = fn;
      self.active = ko.observable(false);
    }

    me.Action = Action;

    return me;
  })(me.engine);

  return me;
})(window.app);
