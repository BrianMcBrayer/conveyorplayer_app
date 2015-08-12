window.app = (function(me, ko, radio) {

  me.start = start;

  function start() {
    ko.applyBindings(me);
  }

  return me;
})(window.app || {}, ko, radio);
