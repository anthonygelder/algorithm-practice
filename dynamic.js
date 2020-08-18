/*
 *  Homework 06 - Dynamic Programming
 *
 *
 *  Problem 1:  Max Consecutive Sum
 *
 *  Prompt:    Given an array of integers find the sum of consecutive
 *             values in the array that produces the maximum value.
 *
 *  Input:     Unsorted array of positive and negative integers
 *  Output:    Integer (max consecutive sum)
 *
 *  Example:   input = [6, -1, 3, 5, -10]
 *             output = 13 (6 + -1 + 3 + 5 = 13)
 *
 *
 */

// Time Complexity:
// Auxiliary Space Complexity:
function maxConsecutiveSum(arr) {
    // declare max


    function findMax() {





    }






    // call findMax
    // return max
}

// *  Example:   input = [6, -1, 3, 5, -10]
// *             output = 13 (6 + -1 + 3 + 5 = 13)


function maxConsecutiveSum(arr) {
    // declare max
    let max = 0
    // loop array
    for(let i = 0; i < arr.length; i++) {
        let tempMax = arr[i]
        
        // 2nd iterator loop
        for(let j = i+1; j < arr.length; j++) {
            tempMax = tempMax + arr[j]
            // check if 
            if(tempMax > max) {
                max = tempMax
            }
            
        }
        
    }


    return max
}

// console.log(maxConsecutiveSum([6, -1, 3, 5, -10]))


/*
 *  BitFlip
 *
 *  Given an array of binary values (0 and 1) and N number of flips that
 *  can convert a 0 to a 1, determine the maximum number of consecutive 1's
 *  that can be made.
 *
 *  Input: arr {Array}
 *  Input: n {Integer}
 *  Output: Integer
 *
 *  Example: bitFlip([0,1,1,1,0,1,0,1,0,0], 2)
 *  Result: 7
 */

// Time Complexity:
// Auxiliary Space Complexity:
function bitFlip (arr, n) {
    // declare ones int
    let ones = 0


    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 1) {
            ones++
        } else {
            continue
        }

        for(let j = arr[i] + 1; j < arr.length; j++) {
            if(arr[j] === 1) {
                ones++
            } else {
                if(n > 0) {
                    arr[j] = 1
                    ones++
                    n--
                }
            }
        }
    }


    return ones
}



console.log(bitFlip([0,1,1,1,0,1,0,1,0,0], 2))