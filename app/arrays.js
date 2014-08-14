if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        var total = 0;
        for (var i = arr.length - 1; i >= 0; i--) {
            total += arr[i];
        }
        return total;
    },

    remove : function(arr, item) {
        var ret = [];
        for(var i = 0; i < arr.length; i++){
            var val = arr[i];
            if(val != item){
                ret.push(val);
            }
        }
        return ret;
    },

    removeWithoutCopy : function(arr, item) {
        for (var i = arr.length - 1; i >= 0; i--) {
            var val = arr[i];
            if(val == item){
                arr.splice(i, 1);
            }
        };

        return arr;
    },

    append : function(arr, item) {
        arr[arr.length] = item;
        return arr;
    },

    truncate : function(arr) {
        arr.splice(arr.length-1, 1);
        return arr;
    },

    prepend : function(arr, item) {
        for (var i = arr.length - 1; i >= 0; i--) {
            arr[i+1] = arr[i];
        };
        arr[0] = item;
        return arr;
    },

    curtail : function(arr) {
        for(var i = 0; i < arr.length; i++){
            arr[i] = arr[i+1];
        }
        arr.splice(arr.length-1, 1);
        return arr;
    },

    concat : function(arr1, arr2) {
        var res = [];
        for(var i = 0; i < arr2.length+arr1.length; i++){
            if(i < arr1.length)
            {
                res[i] = arr1[i];
            }
            else{
                res[i] = arr2[i - arr2.length];
            }
        }
        return res;
    },

    insert : function(arr, item, index) {
        var len = arr.length;
        for (var i = len - 1; i >= index; i--) {
            arr[i+1] = arr[i];
        };
/*
        for(var i = 0; i < len - index; i++)
        {
            arr[len + i] = arr[len-i];
        }
        */
        arr[index] = item;

        return arr;
    },

    count : function(arr, item) {
        var count = 0;
        for(var i = 0; i < arr.length; i++){
            if(arr[i] == item){
                count ++;
            }
        }
        return count;
    },

    duplicates : function(arr) {
        var ret = [];
        for(var i = 0; i < arr.length; i++){
            var count = 0;
            for(var j = 0; j < arr.length; j++){
                if(count > 1)
                {
                    ret[ret.length] = arr[i];
                    i++;
                    j = i +1;
                    count = 0;
                }
                if(arr[i] == arr[j] && !(ret.indexOf(arr[i]) > -1)){
                    count++;
                }

            }
        }

        return ret;
    },

    square : function(arr) {
        for(var i = 0; i < arr.length; i++){
            arr[i] = arr[i] * arr[i];
        }
        return arr;
    },

    findAllOccurrences : function(arr, target) {
        var ret = [];
        for(var i = 0; i < arr.length; i++){
            if(arr[i] == target){
                    ret[ret.length] = i;
            }
        }
        return ret;
    }
  };
});
