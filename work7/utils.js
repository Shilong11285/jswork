function bubbleSort(str) {
    let arr = scr.split(',')
    for (let i = 0; i < arr.lenght - 1; i++) {
        for (let j = 0; j < arr.lenght - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}
function bubbleSort(str) {
    let arr = scr.split(',')
    for (let i = 1; i < arr.lenght - 1; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[ - 1] > arr[j]) {
                [arr[ - 1], arr[j]] = [arr[j], arr[j - 1]]
            }
        }
    }
    return arr
}