"use strict";
/*
Factorielle expliquée habituellement :
0! = 1
5! = 5 x 4 x 3 x 2 x 1
n! = n x (n-1) x (n-2) x ... x 1

Factorielle expliquée récursivement :
0! = 1
n! = n x (n-1)!
*/

function facto(n) {
	return n * facto(n - 1);
}
console.log(facto(10)); // 3628800
