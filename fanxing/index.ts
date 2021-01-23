// function add(a:number,b:number):number{
//     return a + b
// }

// T称为类型变量，调用的时候指定。
// 两个注意点： 参数a b类型一样， 而且和函数返回值一样。
function add<T>(a:T, b:T):T{
    return a + b
}
console.log(add<number>(1,3))

// 类型声明， 如 let a:number
let addFun : <T>(arg1:T,arg2:T) => T

let addFun2: { <T>(arg1:T,arg2:T) : T }

// 泛型接口
interface genAdder { <T>(arg1:T,arg2:T) : T }

let addFun3 : genAdder

// 赋值
// 下面这个赋值，跟类型声明不匹配，会报错
addFun = () => {}
// 下面这个赋值，跟类型声明匹配，可以赋值。
addFun = add

// 调用的时候指定类型
addFun<number>(2,3)

// 泛型接口需要的变量也可以移到外面去
interface genAdder1<T> { (arg1:T,arg2:T) : T }
// 类型声明的时候就已经知道类型
let addFun4 : genAdder1<string>

addFun4 = (a,b) => {return a+b }
addFun4('dsag',1)

