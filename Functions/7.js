function nouveau (Constructor, ...args) {
    // Don't forget, unnamed arguments after Constructor may be passed in!
    let obj_const = Object.create(Constructor.prototype);
    let obj = Constructor.apply(obj_const, args)
    if(obj && typeof obj === "object" || typeof obj === 'function' ) {
        return obj;
    }
    else { 
      return obj_const;
    }
  }