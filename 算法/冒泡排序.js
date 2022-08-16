function bubbleSort(arr) {
    if(arr.length<2) {
        return arr
    }
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<i;j++) {
            if(arr[i]<arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    return arr
}

let arr = [2,5,1,8,19,3,32];
console.log('排序前: ', arr)
console.log('冒泡排序后: ', bubbleSort(arr));