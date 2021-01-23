// 泛型约束

interface ILength {
    length: number
}

// T extends ILength  类型变量T要继承ILength,也就是要有length属性。
function getLength<T extends ILength>(arg:T){
    console.log(arg.length)
}

// 布尔类型没有length属性
getLength<boolean>(false)

// string类型有length属性
getLength<string>('xiaozhang')


function getProperty1<T,K>(obj:T,key:K){
    return obj[key]
}
// K extends keyof T , K 继承 keyof T，是keyof T中的一种
function getProperty<T,K extends keyof T>(obj:T,key:K){
    return obj[key]
}

// keyof 取出某种类型的所有属性， 返回值是一种联合类型
let people = {name: 'xiaozhang', age: 16}
let keys: keyof typeof people //let keys: "name" | "age"

getProperty(people, 'name')
getProperty(people, 'names')
