function isSantaClausable(obj) {
    // TODO
     let arr = ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'];  
     for (let i = 0; i < arr.length; i++) {
       if (typeof obj[arr[i]] != 'function') return false;
     }
     
     return true
  }