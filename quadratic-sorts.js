function bubbleSort(input){
    
    for(let i = 0; i < input.length; i++) {
    //     console.log(input)
    //   let swap = false
      for(let j = 0; j < input.length; j++) {
        if(input[j] > input[j + 1]) {
            let tmp = input[j];
            input[j] = input[j + 1];
            input[j + 1] = tmp;
        //   swap = true
        }
        // if(swap === false) {
        //   break
        // }
      }
    }
    return input
}

function selectionSort(input){
    for(let i = 0; i < input.length; i++) {
        let min = i
        for(let j = i + 1; j < input.length; j++) {
            if(input[min] > input[j]) {
                min = j
            }
        }
        if(min !== i) {
            let tmp = input[i]
            input[i] = input[min]
            input[min] = tmp
        }
    }
    return input
}

function insertionSort(input) {

    for (let i = 1; i < input.length; i++) {
        let key = input[i];
        let j = i - 1;
        while (j >= 0 && input[j] > key) {
            input[j + 1] = input[j];
            j = j - 1;
        }
        input[j + 1] = key;
    }
    return input;
}
console.log(insertionSort([3,9,1,4,7]))