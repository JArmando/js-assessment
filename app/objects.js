if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
    	return fn.call(obj);
    },

    alterObjects : function(constructor, greeting) {
    	return constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
    	var o = [];
    	for(a in obj){
    		if(obj.hasOwnProperty(a)){
    			o.push(a +': '+obj[a]);
    		}
    	}
    	return o;
    }
  };
});
