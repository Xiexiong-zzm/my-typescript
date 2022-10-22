function quickSort(arr) {
    if (arr.length<2) return arr;

    let mid  = Math.floor(arr.length/2);
    let root = arr.splice(mid,1)[0]
    let left = [],
        right = []

    for(let i = 0; i < arr.length; i++) {
        // 比选取的点小，放左边
        if(arr[i]<=root) {
            left.push(arr[i])
        }else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([root],quickSort(right))
}

let arr = [4, 5, 1, 8, 19, 3, 32];
console.log('排序前: ', arr)
console.log('快速排序后: ', quickSort(arr));