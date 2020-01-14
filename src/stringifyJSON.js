// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //var string = '';


  if (obj === null){
    return "null";
  }

  else if(typeof obj ==="number"){
    return obj.toString();
  }

  else if(typeof obj === "boolean"){
    if(obj){
      return "true";
    } else{
      return "false";
    }
  }

  else if(typeof obj === "string"){
    return '"' + obj + '"';
  }
  else if(Array.isArray(obj)){
   var stringArr = [];

   obj.forEach(function(element){
     stringArr.push(stringifyJSON(element));
   })
   return "[" + stringArr.toString() + "]";
 }

  else if(typeof obj === "function"){
    return "";
  }

  else if(typeof obj === "object"){
  var stringObj = "";
  var objKeys = Object.keys(obj);
  objKeys.forEach(function(k){
    if(typeof obj[k] === "function" || typeof obj[k] === "undefined"){
      return "";
    }
    else{stringObj += stringifyJSON(k) + ':' + stringifyJSON(obj[k]) + ',';
    }
  })
  return "{" + stringObj.slice(0, stringObj.length - 1) + "}"
  }

 // return obj.toString();
  
};
