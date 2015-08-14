var app = (function(me, Messenger) {
  me.engine = (function(me, Messenger) {

    me.notifyPositive = notifyPositive;
    me.notifyNegative = notifyNegative;

    function notifyPositive(message) {
      Messenger().success(message);
    }

    function notifyNegative(message) {
      Messenger().error(message);
    }

    return me;
  })(me.engine || {}, Messenger);

  return me;
})(window.app, Messenger);
