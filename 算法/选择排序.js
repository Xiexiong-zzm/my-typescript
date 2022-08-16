function selectSort(arr) {
    if (!arr || arr.length < 2) {
        return arr
    }

    for (let i = 0; i < arr.length; i++) {
        let minIndex = i
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
    return arr
}

let arr = [4, 5, 1, 8, 19, 3, 32];
console.log('排序前: ', arr)
console.log('选择排序后: ', selectSort(arr));