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

console.log(reverseString('helloww'))