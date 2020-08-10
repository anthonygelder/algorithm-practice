// Given a bit array, return it sorted in-place (a bit array is simply an array that contains only bits, either a 1 or a 0).

// [0,1,1,0,0,1,1,0,1,0,0,0] -> [0,0,0,0,0,0,0,1,1,1,1,1] 

function sortBitArr(arr) {
    let left = 0
    let right = arr.length - 1
    while(left < right) {
        while(arr[left] === 0) { left++ }
        while(arr[right] === 1) { right-- }
        if(left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]]
        }
    }
    return arr
}

// console.log(sortBitArr([0,1,1,0,0,1,1,0,1,0,0,0]))

// ----------------------------------------------------------------------------------------------------------------------------


// Given a sorted array of integers and a target value, determine if there exists two integers in the array that sum up to the target value.

// [1,2,3,4,5] 7 -> true

function arrSum(arr, sum) {
    // set left and right pointers
    let left = 0
    let right = arr.length - 1

    // start while loop 
    while(arr[left] + arr[right] !== sum) {

    }
}

// ----------------------------------------------------------------------------------------------------------------------------



/*
 * Utilize the frequency count pattern to solve these problems.  Use a Hash Set
 * or an Array instead of a Hash Table where applicable.
 *
 * Unique
 *
 * Given an array of integers, return an array with all duplicates removed.*
 *
 * Parameters
 * Input: arr {Array of Integers}
 * Output: {Array of Integers}
 *
 * Constraints
 *
 * Time: O(N)
 * Space: O(N)
 *
 * Examples
 * [1, 2, 4, 4, 5, 6] --> [1, 2, 4, 5, 6]w
 * [1, 1, 2, 2, 3, 3]' --> [1, 2, 3]
 * [1, 2, 3, 1, 2] --> [1, 2, 3]
 */
'use strict';

function unique(arr) {
  return [...new Set(arr)]
}

// console.log(unique([2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5]))

// ----------------------------------------------------------------------------------------------------------------------------


/**
 * Word Count
 *
 * Given an body of text, return a hash table of the frequency of each word.
 *
 * Parameters
 * Input: text {String}
 * Output: {Hash Table}
 *
 * Constraints
 *
 * Capital and lower case versions of the same word should be counted is the same word.
 *
 * Remove punctuations from all words.
 *
 * Time: O(N)
 * Space: O(N)
 * Where N is the number of characters in the string.
 *
 * **Examples**
 * 'The cat and the hat.' --> '{ the: 2, cat: 1, and: 1, hat: 1 }'`
 * 'As soon as possible.' --> '{ as: 2, soon: 1, possible: 1 }'`
 * 'It's a man, it's a plane, it's superman!' --> '{ its: 3, a: 2, man: 1, plane: 1, superman: 1 }'`
 */

function wordCount(sentence) {
    // remove capitols and puncuation 
    // split into array
    const noPunc = sentence.replace(/[^\w\s]|_/g, "").toLowerCase().split(" ")

    // init object
    let words = {}

    // loop over array
    for(let i = 0; i < noPunc.length; i++) {
        // add word to object if not there
        if(!(noPunc[i] in words)){
            words[noPunc[i]] = 1
        } else {
            // or increase count if word there
            words[noPunc[i]]++
        }
    }

    return words
  }

//   console.log(wordCount("It's a man, it's a plane, it's superman!"))


// ----------------------------------------------------------------------------------------------------------------------------



/**
 * RGB Set
 *
 * Given a string of characters where each character is either 'r', 'g', or 'b',
 * determine the number of complete sets of 'rgb' that can be made with the
 * characters.
 *
 * Parameters
 * Input: str {String}
 * Output: {Integer}
 *
 * Constraints
 * Time: O(N)
 * Space: O(1)
 *
 * Examples
 * `'rgbrgb' --> 2`
 * `'rbgrbrgrgbgrrggbbbbrgrgrgrg' --> 7`
 * `'bbrr' --> 0`
 */

function rgb(string) {
    let r = 0
    let g = 0
    let b = 0
    // loop through string
    for(let i = 0; i < string.length; i++) {
        // check to see what char and add to count
        if(string[i] === 'r') {
            r++
        } else if (string[i] === 'g') {
            g++
        } else {
            b++
        }
    }
    let min
    //return the lowest number of the three if all above 0
    if(r && g && b) {
        min = Math.min(r,g,b)
    } else {
        return 0
    }

    return min
}


// console.log(rgb('rbgrbrgrgbgrrggbbbbrgrgrgrg'))


// ----------------------------------------------------------------------------------------------------------------------------


/**
 * Missing Number
 *
 * Given range of 1 to N and an array of unique integers that are within that
 * range, return the missing integers not found in the array
 *
 * Parameters
 * Input: n {Integer}
 * Input: arr {Array of Integers}
 * Output: {Array of Integers}
 *
 * Constraints
 * Time: O(N)
 * Space: O(N)
 *
 * Examples
 * `4, [1, 4, 2] --> [3]`
 * `8, [4, 7, 1, 6] --> [2, 3, 5, 8]`
 * `6, [6, 4, 2, 1] --> [3, 5]`
 */

function missingNumber(n, arr) {
    const sorted = arr.sort()
    const missing = Array(n).fill(0)
    
    for(let i = 0; i < sorted.length; i++) {
        missing[sorted[i] - 1] = 1
    }

    const empty = []
    for(let i = 0; i < missing.length; i++) {
        if(missing[i] === 0) {
            empty.push(i+1)
        }
    }

    return empty
}



// console.log(missingNumber(6, [6, 4, 2, 1]))



// ----------------------------------------------------------------------------------------------------------------------------



/**
 * Letter Sort
 *
 * Given a string of letters, return the letters in sorted order.
 *
 * Parameters
 * Input: str {String}
 * Output: {String}
 *
 * Constraints
 * Time: O(N)
 * Space: O(N)
 *
 * Examples
 * `hello --> ehllo`
 * `whiteboard --> abdehiortw`
 * `one --> eno`
 */

function letterSort(string) {
    const arr = []
    for(let i = 0; i < string.length; i++){
        arr.push(string[i])
    }
    return arr.sort().join('')
}

// console.log(letterSort("whiteboard"))


// ----------------------------------------------------------------------------------------------------------------------------



/**
 * Character Mode
 *
 * Given a string, find the most frequent occurring letter(s) in the string
 *
 * Parameters
 * Input: str {String}
 * Output: {String}
 *
 * Constraints
 * If more than one letter is tied for the most frequent, return a string of all
 * the letters in one string.
 *
 * Upper case characters should count as lower case, and do not include spaces
 * ... as characters.
 *
 * Time: O(N)
 * Space: O(N)
 *
 * Examples
 * 'hello' --> 'l'
 * 'A walk in the park' --> 'a'
 * 'noon' --> 'no'
 */

function characterMode(string) {

    const lower = string.replace(/\s/g, '').toLowerCase()

    // init object
    let char = {}

    // loop over array
    for(let i = 0; i < lower.length; i++) {
        // add word to object if not there
        if(!(lower[i] in char)){
            char[lower[i]] = 1
        } else {
            // or increase count if word there
            char[lower[i]]++
        }
    }

    let max = 0
    let returnStr
    for (let i in char) {
        if (char[i] === max) {
            returnStr = returnStr + i
        } else if (char[i] > max) {
            max = char[i]
            returnStr = i
        } 
    }

    return returnStr
}

characterMode('hello')



// ----------------------------------------------------------------------------------------------------------------------------


/**
 * Sort Digits
 *
 * Given an integer, sort the digits in ascending order and return the new integer.
 * Ignore leading zeros.
 *
 * Parameters
 * Input: num {Integer}
 * Output: {Integer}
 *
 * Constraints
 * Do not convert the integer into a string or other data type.
 *
 * Time: O(N) where N is the number of digits.
 * Space: O(1)
 *
 * Examples
 * 8970 --> 789
 * 32445 --> 23445
 * 10101 --> 111
 */


function sortDigits(n) {
    console.log()
}

sortDigits(8970)

// ----------------------------------------------------------------------------------------------------------------------------


/**
 *  Get Duplicates
 *
 *  Given an array of values, return only the values that have duplicates in the
 *  array
 *
 *  Parameters
 *  Input: arr {Array}
 *  Output: {Array}
 *
 *  Constraints
 *  Time: O(N)
 *  Space: O(N)
 *
 *  Examples
 *  [1, 2, 4, 2] --> [2]
 *  [3, 2, 3, 2, 3, 3, 4] --> [3, 2]
 *  [1, 2, 3, 4] --> []
 */

function getDuplicates(arr) {
    const newArr = []
    // sort array
    const sorted = arr.sort()
    // loop over array
    for(let i = 0; i < sorted.length; i ++) {
        // check is next index is the same
        if(sorted[i] === sorted[i + 1] && sorted[i + 1] !== sorted[i + 2]) {
            // if so, its a duplicate, push to new arr
            newArr.push(sorted[i])
        } 
    }

    return newArr
}

getDuplicates([1, 2, 4, 2])


// ----------------------------------------------------------------------------------------------------------------------------



/**
 *  Anagram Pair
 *
 *  Given two strings, determine if the strings are anagrams of one another.
 *
 *  Two words are anagrams of one another if they contain the same letters.
 *
 *  Parameters
 *  Input: str1 {String}
 *  Input: str2 {String}
 *  Output: {Boolean}
 *
 *  Constraints
 *  With N as the length of the first string, and M as the length of the second string.
 *
 *  Time: O(N)
 *  Space: O(N)
 *
 *  Examples
 *  "cat", "act" --> true
 *  "cat", "dog" --> false
 *  "racecar", "aaccrres" --> false
 */

function anagramPair(string1, string2) {
    const one = string1.split('').sort().join('')
    const two = string2.split('').sort().join('')
    if(one === two) {
        return true
    } else {
        return false
    }
}


// console.log(anagramPair("racecar", "aaccrres"))


// ----------------------------------------------------------------------------------------------------------------------------


/**
 *  Anagram Palindrome
 *
 *  Given a string, determine if the string can be rearranged to form a palindrome.
 *
 *  A palindrome is a word that is the same as its reversed. For example: "racecar"
 *  and "noon" are palindromes because they match their reversed version
 *  respectively. On the other hand, "cat" is not a palindrome because "cat"
 *  does not equal "tac".
 *
 *  Parameters
 *  Input: str {String}
 *  Output: {Boolean}
 *
 *  Constraints
 *
 *  Assume the string only contains lowercase letters and no spaces.
 *
 *  Time: O(N)
 *  Space: O(1)
 *
 *  Examples
 *  `"carrace" --> true ("carrace" can be rearranged to "racecar")`
 *  `"cat" --> false`
 */


function anagramPalindrome(string) {
    let char = {}

    // loop over array
    for(let i = 0; i < string.length; i++) {
        // add word to object if not there
        if(!(string[i] in char)){
            char[string[i]] = 1
        } else {
            // or increase count if word there
            char[string[i]]++
        }
    }

    let odds = 0

    for (let i in char) {
        if (char[i] % 2 === 1) {
            odds++
        } 
    }

    // if there is more then one char that appears an odd number of times, it can't be a palindrome
    if(odds > 1) {
        return false
    } else {
        return true
    }
    
}

// console.log(anagramPalindrome("carraace"))


// ----------------------------------------------------------------------------------------------------------------------------



/*
 * Number of Ones
 *
 * *Given a sorted bit array (values of either 0 or 1), determine the number of 1's in the array.*
 *
 * **Parameters**
 * Input: arr {Array of Integers}
 * Output: {Integer}
 *
 * **Constraints**
 * Time: O(logN)
 * Space: O(1)
 *
 * **Examples**
 * `[0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1] --> 8`
 * `[0, 0, 0] --> 0`
 * `[0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1] --> 7`
 */


function numberOfOnes(arr) {

    let start = 0;
    let end = arr.length - 1;
    let mid
    let count
    while(!count) {
        mid = Math.floor((start + end) / 2)
        if(arr[mid - 1] === 0 && arr[mid] === 1) {
            count = arr.length - mid
        } else if (arr[mid] === 1){
            start = Math.floor(mid / 2)
        } else {
            start = Math.floor(mid * 2)
        }
    }
    console.log(count)


  }

// console.log(numberOfOnes([0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1]))



// ----------------------------------------------------------------------------------------------------------------------------



/*
 * ## Closest Value
 *
 * *Given a sorted bit array of integers, and a target value, find the number in the array that is closest to the target.*
 *
 * **Parameters**
 * Input: arr {Array of Integers}
 * Input: target {Integer}
 * Output: {Integer}
 *
 * **Constraints**
 * If there are two numbers tied for the closest value, return the lowest value.
 *
 * Time: O(logN)
 * Space: O(1)
 *
 * **Examples**
 * `[1, 2, 3, 5, 5, 7, 9, 10, 11], 6 --> 5`
 * `[1, 2, 3], 8 --> 3`
 * `[1, 10, 22, 59, 67, 72, 100], 70 --> 72`
 */


function closestValue(arr, target) {
    let start = 0
    let end = arr.length - 1
    let mid
    while(start <= end) {
        mid = Math.floor((start + end) / 2)
        if(arr[mid] === target) { 
            return mid
        } else if (arr[mid] < target && arr[mid + 1] > target) {
            return arr[mid]
        } else if (mid === end) {
            return arr[arr.length - 1]
        }
        if(target < arr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
}

// console.log(closestValue([1, 2, 3], 8))


// ----------------------------------------------------------------------------------------------------------------------------



/*
 * ## Greater Values
 *
 * *Given an sorted array of integers, and a target value return the number of values greater the target.*
 *
 * **Parameters**
 * Input: arr {Array of Integers}
 * Input: target {Integer}
 * Output: {Integer}
 *
 * **Constraints**
 *
 * Time: O(logN)
 * Space: O(1)
 *
 * **Examples**
 * `[1, 2, 3, 5, 5, 7, 9, 10, 11], 5 --> 4`
 * `[1, 2, 3], 4 --> 0`
 * `[1, 10, 22, 59, 67, 72, 100], 13 --> 5`
 *
 */

function greaterValues(arr, target) {
    let start = 0
    let end = arr.length - 1
    let mid
    while(start <= end) {
        mid = Math.floor((start + end) / 2)
        if(arr[mid] === target) { 
            return arr.length - (mid + 1)
        } else if (arr[mid] < target && arr[mid + 1] > target) {
            return arr.length - (mid + 1)
        } else if (mid === end) {
            return 0
        }
        if(target < arr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
}

console.log(greaterValues([1, 2, 3], 4))