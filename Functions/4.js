// return the nested property value if it exists,
// otherwise return undefined
Object.prototype.hash = function(string) {
    let arr = string.split('.'), str = this;
    for (let i = 0; i <= arr.length - 1; i++) {
      if (arr[i] in str) str = str[arr[i]]
      else {
        str = undefined;
        break;
      }
    }
    
    return s
    
  }