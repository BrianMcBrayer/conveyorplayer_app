var app = (function(me) {
  me.engine = (function(me) {

    me.totalScore = ko.observable();
    me.increaseScore = increaseScore;
    me.decreaseScore = decreaseScore;

    function increaseScore(reason, increaseBy) {
      me.totalScore(me.totalScore() + increaseBy);
      me.notifyPositive(reason);
    }

    function decreaseScore(reason, decreaseBy) {
      me.totalScore(me.totalScore() - decreaseBy);
      me.notifyNegative(reason);
    }

    return me;
  })(me.engine || {});

  return me;
})(window.app);
