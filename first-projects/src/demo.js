const addAge = (obj) => {
    obj.age += 1
    return obj
}

const parson = {
    name: 'sajjat'
}

console.log(addAge(parson));