// Given two strings, write a function to determine if the second string is an anagram of first.

// 'aaa','aaa' -> true
// 'zsd','dsd' -> false
// 'abc','bca' -> true
// 'qwe','q' -> false
// '','a' -> false

function anagrams(str1,str2) {
    // compare length and return false if not same
    if(str1.length !== str2.length) {
        return false
    }

    // create objects
    let obj1 = {}
    let obj2 = {}

    // loop str1
    for(let char of str1) {
        // add char to object if not in
        // increase count if so
        if(char in obj1) {
            obj1[char]++
        } else {
            obj1[char] = 1
        }
    } 

    // loop str2 
    for(let char of str2) {
        // add char to object if not in
        // increase count if so
        if(char in obj2) {
            obj2[char]++
        } else {
            obj2[char] = 1
        }
    }

    // console.log(obj1,obj2)
    // loop through 1 obj and compare with object 2
    for(let char in obj1) {
        console.log(char, obj1[char], obj2[char])
        if(!char in obj2) {
            return false
        }

        if(obj1[char] !== obj2[char]) {
            return false
        }
    }

    return true
}

// console.log(anagrams('hell','lolh'))


// -------------------------------------------------------------

// Write a function called sameFrequency. Given two positive intergers,
// fund out if the two numbers have the same frequency of digits.
// Time Complexity O(n)

// 182, 281 --> true
// 34, 14 --> true

function sameFrequency(num1,num2) {
    // convert numbers to strings
    const numStr1 = num1.toString()
    const numStr2 = num2.toString()

    // check same length
    if(numStr1.length !== numStr2.length) {
        return false
    }

    // create objects
    let obj1 = {}
    let obj2 = {}

    // loop over each num and add to each object
    for(let i = 0; i < numStr1.length; i++) {
        if(numStr1[i] in obj1) {
            obj1[numStr1[i]]++
        } else {
            obj1[numStr1[i]] = 1
        }
    }

    for(let j = 0; j < numStr2.length; j++) {
        if(numStr2[j] in obj2) {
            obj2[numStr2[j]]++
        } else {
            obj2[numStr2[j]] = 1
        }
    }

    // compare objects
    for(const num in obj1) {
        if(!num in obj2) {
            return false
        }

        if(obj1[num] !== obj2[num]) {
            return false
        }
    }

    return true
}

console.log(sameFrequency(182,281))
console.log(sameFrequency(34,14))
console.log(sameFrequency(3589578, 5879385))
console.log(sameFrequency(22, 222))