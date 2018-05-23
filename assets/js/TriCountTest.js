var TriCountClass = new TriCount();

// Test errors
assert('minLength=1.02 and maxLength=2 should return -1', TriCountClass.count(1.02, 2) === -1);
assert('minLength=-1 and maxLength=2 should return -1', TriCountClass.count(-1, 2) === -1);
assert('minLength=2 and maxLength=1 should return -1', TriCountClass.count(2, 1) === -1);
assert('minLength=100000 and maxLength=10000000 should return -1', TriCountClass.count(100000, 10000000) === -1);
assert('minLength=1 and maxLength=1000000 should return -1', TriCountClass.count(1, 1000000) === -1);

// Test success
assert('minLength=1 and maxLength=1 should return 1', TriCountClass.count(1, 1) === 1);
assert('minLength=1 and maxLength=2 should return 3', TriCountClass.count(1, 2) === 3);
assert('minLength=9 and maxLength=10 should return 4', TriCountClass.count(9, 10) === 4);
assert('minLength=19 and maxLength=1000 should return 83540657', TriCountClass.count(19, 1000) === 83540657);