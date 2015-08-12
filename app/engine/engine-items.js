var app = (function(me) {
  me.engine = (function(me) {

    me.items = ko.observableArray([
        { id: "ball-item", text: "Ball" },
        { id: "gift-item", text: "Gift" }
      ]);    

    return me;
  })(me.engine);

  return me;
})(window.app);
