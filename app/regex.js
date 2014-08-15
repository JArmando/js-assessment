if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        return (str.search(/[0-9]/) > -1);
    },

    containsRepeatingLetter : function(str) {
        return /([A-Za-z])\1/.test(str);
    },

    endsWithVowel : function(str) {
        return /[aeiouAEIOU]$/.test(str);
    },

    captureThreeNumbers : function(str) {   
        var ret = str.match(/[0-9]{3}/);
        return ( ret ? ret[0]:false) ;
    },

    matchesPattern : function(str) {
        return /^\d{3}-\d{3}-\d{4}$/.test(str);
    },
    isUSD : function(str) {
        return /^\$\d{1,3}(\,\d{3})*(\.\d{2})?$/.test(str);
    }
  };
});

///^([\d{1,3}]{1})([\,\d{3}]*)\.?\d{1,2}$/
/*
/^(\d{1,3}){1}(\,\d{3})\.{1}(\d{2}$)/

/^\$\d{1,3}(\,\d{3})*(\.\d{2})?$/


*/