module.exports = function (xs, f, acc) {
    if (xs.reduce) return xs.reduce(f, acc);
    for (var i = 0; i < xs.length; i++) {
        if (!hasOwn.call(xs, i)) continue;
        acc = f(acc, xs[i], i);
    }
    return acc;
};

var hasOwn = Object.prototype.hasOwnProperty;
