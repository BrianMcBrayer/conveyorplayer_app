var app = (function(me) {
  me.engine = (function(me) {
    me.score = (function(me) {

      me.totalScore = ko.observable();
      me.increase = increase;
      me.decrease = decrease;

      function increase(reason, increaseBy) {
        me.totalScore(me.totalScore() + increaseBy);
        me.notifications.positive(reason);
      }

      function decrease(reason, decreaseBy) {
        me.totalScore(me.totalScore() - decreaseBy);
        me.notifications.negative(reason);
      }

      return me;
    })(me.score || {});

    return me;
  })(me.engine || {});

  return me;
})(window.app);
