var app = (function(me) {
  me.engine = (function(me) {
    
    me.items = [];


    function activateAction(action) {
      console.log("Activated Action");
      console.dir(action);
    }

    return me;
  })(me.engine || {});

  return me;
})(window.app || {});
