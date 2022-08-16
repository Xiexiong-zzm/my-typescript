function quickSort(arr) {
    if(arr.length<=1) {
        return arr
    }
    let pivotIndex = Math.floor(arr.length/2) 
    let pivot = arr.splice(pivotIndex, 1)[0]
    let left = []
    let right = []
    for(let i=0; i<arr.length; i++) {
        if(arr[i]<pivot) {
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([pivot],quickSort(right))
}

let arr = [4, 5, 1, 8, 19, 3, 32];
console.log('排序前: ', arr)
console.log('快速排序后: ', quickSort(arr));