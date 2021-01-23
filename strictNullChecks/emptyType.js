// 两个空类型
let u = undefined;
let n = null;
// 常见区别
Number(null); //0
Number(undefined); //NaN
let age = null;
console.log(5 + age); //5
age = undefined;
console.log(5 + age); //NaN
undefined == null; //true
