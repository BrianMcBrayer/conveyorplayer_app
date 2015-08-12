var app = (function(me, window) {
  me.engine = (function(me, window) {

    me.gameportWidth = gameportWidth;

    function gameportWidth() {
      return window.pageWidth;
    }

    return me;
  })(me.engine, window);

  return me;
})(window.app, window);
