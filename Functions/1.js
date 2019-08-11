function spyOn (func) {
    let curr = 0, k, arr = [];
    let spy = function (...args) {
      curr++;
      arr.push(...args)
      k = func.apply(this, args);
      
      return k
    }
    
    spy.callCount = () => curr;
    spy.wasCalledWith = item => arr.some(items => items === item);
    spy.returned = i => k === i
    
    return spy;
    // I spy with my little eye… your code here
  }     