var app = (function(me) {
  me.engine = (function(me) {
    var currentTick = 0;
    var registeredTickers = [];
    var registeredOneTickers = [];
    var tickIntervalId = setInterval(ticked, 15);

    me.onTick = onTick;
    me.offTick = offTick;

    function onTick(fn, tickMod) {
      registeredTickers.push({fn: fn, tickMod: tickMod});
    }

    function offTick(fn) {
      for(var i = 0, len = registeredTickers.length; i < len; i++) {
        var curTicker = registeredTickers[i];
        if (curTicker.fn === fn) {
          registeredTickers.splice(i, 1);
          return;
        }
      }
    }

    function ticked() {
      currentTick++;

      for(var r = 0, len = registeredTickers.length; r < len; r++) {
        runRegisteredTicker(registeredTickers[r]);
      }

      var clearIndices = [];
      for(var i = 0, len = registeredOneTickers.length; i < len; i++) {
        if (runRegisteredTicker(registeredOneTickers[i])) {
          clearIndices.push(i);
        }
      }

      clearIndices.forEach(function(curI) {
        registeredOneTickers.splice(curI, 1);
      });
    }

    function runRegisteredTicker(ticker) {
      var tickMod = ticker.tickMod;

      if (tickMod == null || (tickMod != null && currentTick % tickMod === 0)) {
        ticker.fn(currentTick);
        return true;
      }

      return false;
    }

    return me;
  })(me.engine || {});

  return me;
})(window.app || {});
