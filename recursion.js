function printArray(arr){
    let i = 0
  
    function printNum(i) {
      if(i > arr.length - 1) {return}
      console.log(arr[i])
      i++
      printNum(i)
    }
  
    printNum(i)
    return
}

// printArray([1,2,3,4,5])

// ----------------------------------------------------------------------------


/*
 * 2b. Print each item in an array backwards
 *
 * Input:   arr {Array}
 * Output:  {undefined}
 *
 * Example: printReverse([1,2,3]) =>
 *          3
 *          2
 *          1
 */
function printReverse(arr) {
    let i = arr.length - 1

    function printNum(i) {
        if(i < 0) {return}
        console.log(arr[i])
        i--
        printNum(i)
    }

    printNum(i)
    return
}


// printReverse([1,2,3,4,5])


// ----------------------------------------------------------------------------

/*
 * 2c. Reverse a string
 *
 * Input:   str {String}
 * Output:  {String}
 *
 * Example: reverseString('hello') => 'olleh'
 */
function reverseString(str){
    let string = ''

    function reverse(str) {
        if(str.length === 0) {return}
        string += str[str.length - 1]
        str = str.substring(0, str.length - 1)
        reverse(str)
    }

    reverse(str)
    return string
}

// console.log(reverseString('helloww'))

// ----------------------------------------------------------------------------

/*
 * 2d. Given an array of integers, create an array of two-item arrays
 *
 * Input:   arr {Array}
 * Output:  {Array}
 *
 * Example: arrayPairs([1, 2, 3, 4, 5, 6])  =>    [[1,2], [3,4], [5,6]]
 * Example: arrayPairs([1, 2, 3, 4, 5])     =>    [[1,2], [3,4], [5, undefined]]
 */
function arrayPairs(arr) {
    let result = []
    let i = 0
    function getPairs(i) {
        if(i >= arr.length) {return}

        result.push([arr[i], arr[i+1]])
        i = i + 2
        getPairs(i)
    }

    getPairs(i)
    return result
 }

//  console.log(arrayPairs([1, 2, 3, 4, 5]))

/*
* 2e. Flatten a nested array
*
* Input:   arr {Array}
* Output:  {Array}
*
* Example: flatten([1, [2, 3, [4]], 5, [[6]]]) => [1, 2, 3, 4, 5, 6]
*/
function flatten(arr){
    let result = []

    function traverse(element) {
        if(!Array.isArray(element)) {
            result.push(element)
            return
        } 
        
        for (let i = 0; i < element.length; i++) {
            traverse(element[i])
        }
    }

    traverse(arr)
    return result
}

//  console.log(flatten([1, [2, 3, [4]], 5, [[6]]]))


/*
* 2f. Given a base and an exponent, create a function to find the power
*
* Input:   base {Integer}
* Input:   exponent {Integer}
* Output:  {Integer}
*
* Example: power(3, 4) => 81
*
* 1 --> 3 --> 9 --> 27 --> 81
*/
function power(base, exponent) {
    let result = base

    function multiply() {
        if (exponent === 1) {return}
        result = result * base
        multiply(exponent--)
    }

    multiply()
    return result
}

// console.log(power(3,4))

/*
* 2g. Merge two sorted arrays
*
* Input:   arr1 {Array}
* Input:   arr2 {Array}
* Output:  Array
*
* Example: merge([1, 4, 7], [2, 3, 6, 9]) => [1, 2, 3, 4, 6, 7, 9]
*/
function merge(arr1, arr2){
    // new array
    let result = []

    function sort() {
        console.log(arr1, arr2)
        // base base, if both array length is reached
        if (arr1.length === 0 && arr2.length === 0) {return}

        // check which index is bigger
        if(arr1[0] <= arr2[0]) {
            // if so, push and iterate
            result.push(arr1[0])
            arr1.shift()
        } else {
            // else, push and iterate
            result.push(arr2[0])
            arr2.shift()
        }
            
            
            
        sort()
    }
    
    sort()
    return result
}

console.log(merge([1, 2, 4, 7], [1, 2, 3, 6, 9]))





/*
 * Complete the 'latticePaths' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER m
 *  2. INTEGER n
 */

function latticePaths(m, n) {
    // base case
    // boundry reached
    if(m < 0 || n < 0) {return 0}

    //destination reached
    if(m === 0 && n === 0) {return 1}

    // recursive steps
    let up = latticePaths(m-1,n)
    let left = latticePaths(m,n-1)

    // return result of recursive
    return up + left
}

// console.log(latticePaths(3,3))







function minimumStepsToOne(num) {
    let steps = 0

    function step() {
        // console.log(num)
        if(num === 1) {return}
        
        if(num === 2) {
            console.log('here1')

            num--
            steps++
        } else if(num % 3 === 0) {
            console.log('here2')

            num = num/3
            steps++
        } else if(num % 2 === 0){
            console.log('here3')

            num = num/2
            steps++
        } else {
            console.log('here4')
            num--
            steps++
        }

        console.log(num)
        step()
    }

    step()
    return steps
}

// console.log(minimumStepsToOne(11))



