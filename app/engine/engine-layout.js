var app = (function(me, $, doc) {
  me.engine = (function(me, $, doc) {

    me.gameportWidth = gameportWidth;

    function gameportWidth() {
      return $(document).width();
    }

    return me;
  })(me.engine, jQuery, document);

  return me;
})(window.app, jQuery, document);
