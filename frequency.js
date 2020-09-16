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

console.log(anagrams('hell','lolh'))