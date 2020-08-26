/**
 *  Homework 08 - Quasilinear Sorts
 *
 *  Problem 1: Mergesort
 *
 *  Prompt:    Given an unsorted array of integers, return the array
 *             sorted using mergesort.
 *
 *  Input:     input {Array}
 *  Output:    {Array}
 *
 *  Example:   [3,9,1,4,7] --> [1,3,4,7,9]
 */

// Worst Time Complexity:
// Worst Total (Call Stack + Auxiliary) Space Complexity:
// Average Time Complexity:
// Average Total (Call Stack + Auxiliary) Space Complexity:
// Stability:




function mergesort(input) {
    let newArr = []

    function helper(array) {
        if(array.length <= 1) {
            return
        }
    
        const half = Math.ceil(array.length / 2);    
    
        const left = array.splice(0, half)
        const right = array.splice(-half)
    
        helper(left)
        helper(right)

        while(left.length && right.length) {
            if(left[0] < right[0]) {
                newArr.push(left.shift());
            } else {
                newArr.push(right.shift());
            }
            
        }
    }
    
    helper(input)
    return newArr
}

console.log(mergesort([3,9,1,4,7]))
