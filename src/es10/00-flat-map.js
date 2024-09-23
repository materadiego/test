// flat

const array = [1, 1, 2, 3, 4, [1, 2, 3, 4, [5, 6, 7, 8]]];
console.log(array.flat(3));

// flatmap

const array2 = [2, 10, 50];
console.log(array2.flatMap((v) => [v, v * 2]));
console.log(array2.flatMap((v) => [v, v + 1]));
