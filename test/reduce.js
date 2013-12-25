var reduce = require('../');
var test = require('tape');

test('numeric reduces', function (t) {
    t.plan(6);
    
    var xs = [ 1, 2, 3, 4 ];
    t.equal(
        reduce(xs, function (acc, x) { return acc + x }, 0),
        10
    );
    t.equal(
        reduce(xs, function (acc, x) { return acc + x }, 100),
        110
    );
    t.equal(
        reduce(xs, function (acc, x) { return acc + x }),
        10
    );
    
    var ys = cripple([ 1, 2, 3, 4 ]);
    t.equal(
        reduce(ys, function (acc, x) { return acc + x }, 0),
        10
    );
    t.equal(
        reduce(ys, function (acc, x) { return acc + x }, 100),
        110
    );
    t.equal(
        reduce(ys, function (acc, x) { return acc + x }),
        10
    );
});

test('holes', function (t) {
    t.plan(4);
    
    var xs = Array(10);
    xs[2] = 5; xs[4] = 6; xs[8] = 4;
    t.equal(
        reduce(xs, function (acc, x) { return acc + x }),
        15
    );
    t.equal(
        reduce(xs, function (acc, x) { return acc + x }, 100),
        115
    );
    
    var ys = cripple(Array(10));
    ys[2] = 5; ys[4] = 6; ys[8] = 4;
    t.equal(
        reduce(ys, function (acc, x) { return acc + x }),
        15
    );
    t.equal(
        reduce(ys, function (acc, x) { return acc + x }, 100),
        115
    );
});

function cripple (xs) {
    xs.reduce = undefined;
    return xs;
}
