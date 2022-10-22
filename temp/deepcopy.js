function deepCopy(obj) {
    let newObj = Array.isArray(obj) ? [] : {}

    if (obj && typeof obj === "object") {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                newObj[key] = (obj && typeof obj[key] === 'object') ? deepCopy(obj[key]) : obj[key];
            }
        }
    } 
    return newObj
}


let obj22 = {
    name: '222',
    class: {
        num: 1,
        grade: {
            text: '333'
        }
    }
}

let obj23 = deepCopy(obj22)
console.log(obj23);