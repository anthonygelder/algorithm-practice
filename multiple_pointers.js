// write a function called zeroSum which accepts a sorted array of integers. The function should find the first pair of where the sum is 0.
// Return an array that includes both values that sum to zero or undefined if a pair does not exist.

function zeroSum(arr) {
    // loop through array 
    let left = 0
    let right = arr.length - 1
    while(left < right){
        let sum = arr[left] + arr[right]
        if(sum === 0){
            return [arr[left],arr[right]]
        } else if(sum > 0) {
            right--
        } else {
            left++
        }
    }
}

// console.log(zeroSum([-5,-2,-1,0,1,3,4]))


// implement a function called countUnigueValues, which acceptes a sorted array, and counts the unique values in the array. 
// There can be negative numbers in the array, but it wil always be sorted. 

function countUniqueValues(arr) {

    if(arr.length === 0) {
        return 0
    }
    let i = 0


    // start loop with 2 pointers at the start of the array
    for(let j = 1; j < arr.length; j++ ) {
        // console.log(i)
        // check to see if the 2 pointers are equal
        if(arr[i] !== arr[j]) {
            // if they are, interate the second pointer
        
            // if they are not, iterate 1st pointer and set it equal to the second pointer
            
            i++
            
            arr[i] = arr[j]
        }
        
        // console.log(arr)
    }
    
    // when second pointer reaches array end, return index of 1st pointer plus 1
    
    return i + 1

}

console.log(countUniqueValues([1,1,1,2,3,3,4,4,5,6]))