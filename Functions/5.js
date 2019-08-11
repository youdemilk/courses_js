// TODO
Array.prototype.square = function () {
    return this.map(item => Math.pow(item, 2));
}
Array.prototype.cube = function () {
    return this.map(item => Math.pow(item, 3));
}
Array.prototype.sum = function () {
    if (this.length === 0) return 0
    else return this.reduce((acum, curr) => acum += curr);
}
Array.prototype.average = function () {
    return this.sum() / this.length;
}
Array.prototype.even = function () {
    return this.filter(item => item % 2 === 0);
}
Array.prototype.odd = function () {
    return this.filter(item => item % 2 != 0);
}