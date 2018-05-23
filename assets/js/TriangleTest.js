var triangle1 = new Triangle(1,1,1);
assert('Triangle1 ab=1, ac=1, bc=1 should return true', triangle1.isAppropriate() === true);
assert('Périmètre Triangle1 ab=1, ac=1, bc=1 should return 3', triangle1.getPerimeter() === 3);

var triangle2 = new Triangle(1,2,2);
assert('Triangle2 ab=1, ac=2, bc=2 should return true', triangle2.isAppropriate() === true);
assert('Périmètre Triangle2 ab=1, ac=2, bc=2 should return 5', triangle2.getPerimeter() === 5);

var triangle3 = new Triangle(1,2,3);
assert('Triangle3 ab=1, ac=2, bc=3 should return false', triangle3.isAppropriate() === false);
assert('Périmètre Triangle3 ab=1, ac=2, bc=3 should return 6', triangle3.getPerimeter() === 6);