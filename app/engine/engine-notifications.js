var app = (function(me, Messenger) {
  me.engine = (function(me, Messenger) {
    me.notifications = (function(me, Messenger) {

      me.positive = positive;
      me.negative = negative;

      function positive(message) {
        Messenger().success(message);
      }

      function negative(message) {
        Messenger().error(message);
      }

      return me;
    })(me.notifications || {}, Messenger);

    return me;
  })(me.engine || {}, Messenger);

  return me;
})(window.app, Messenger);
