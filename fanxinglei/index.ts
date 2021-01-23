class Adder {
    add: <T>(a:T ,b:T) => T
}
const adder = new Adder()

adder.add = function add<T>(arg1:T, arg2:T):T{
    // 这样写，T是什么类型就不知道了，+的操作，不能用于T这种类型
    return arg1 + arg2
}

// 泛型类，也可以把类型变量提出来
class Adder1 <T>{
    add: (a:T,b:T) => T
}

// new 实例的时候就可以指定类型变量
let adder1 = new Adder1<string>()
adder1.add = function(a,b){
    // + 可以用于string,不会报错了
    return a+b
}
