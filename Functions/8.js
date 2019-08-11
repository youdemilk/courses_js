function construct(Class, ...args) {
    // return new Class(...args)
    obj = Object.create(Class.prototype);
    Class.apply(obj, args);
    return obj;
}