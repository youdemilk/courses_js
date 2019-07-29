function prefill(n, v) {
    if (n === 0) return [];
    else if (n < 0 || parseInt(n) != n) {
        throw new TypeError (n + ' is invalid');
    }
    else {
        let arr = [];
        for (let i = 0; i < n; i++) {
            arr.push(v);
        }
        return arr;
    }
}