let weight: number | undefined
weight = undefined

// 使用? 相当于 string | undefined
// 更多是再方法的参数里
function getPeople(name?: string){
    return name || ''
}

getPeople('zhangsan')
getPeople(undefined)
getPeople(null) //不行

let school:any //所有类型,使用any就发挥不出tyescript的优势，尽量少使用，不要留坑。
school = null
school = undefined
school = 3
school = 'hello'
