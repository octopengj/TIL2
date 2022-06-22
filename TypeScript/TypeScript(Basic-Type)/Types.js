"use strict";
// JavaScript
function add(n1, n2) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error('Incorrect input!');
    }
    return n1 + n2;
}
const result = add(10, 20);
//TypeScript
function add1(n1, n2) {
    return n1 + n2;
}
const result1 = add(10, 20);
