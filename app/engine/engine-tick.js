var app = (function(me) {
  me.engine = (function(me) {
    var currentTick = 0;
    var registeredTickers = [];
    var tickIntervalId = setInterval(ticked, 25);

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
      registeredTickers.forEach(runRegisteredTicker);
    }

    function runRegisteredTicker(ticker) {
      var tickMod = ticker.tickMod;
      if (tickMod == null || (tickMod != null && currentTick % tickMod === 0)) {
        ticker.fn(currentTick);
      }
    }

    return me;
  })(me.engine || {});

  return me;
})(window.app || {});
