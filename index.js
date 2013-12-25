var hasOwn = Object.prototype.hasOwnProperty;

module.exports = function (xs, f, acc) {
    var hasAcc = arguments.length >= 3;
    if (hasAcc && xs.reduce) return xs.reduce(f, acc);
    if (xs.reduce) return xs.reduce(f);
    
    for (var i = 0; i < xs.length; i++) {
        if (!hasAcc) {
            acc = xs[i];
            hasAcc = true;
        }
        if (!hasOwn.call(xs, i)) continue;
        acc = f(acc, xs[i], i);
    }
    return acc;
};
