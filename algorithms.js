// Given the array nums, for each nums[i] 
// find out how many numbers in the array 
// are smaller than it. That is, for each 
// nums[i] you have to count the number 
// of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

const numbers = [8,1,2,2,3]

function smallerNumbersThanCurrent(nums) {
    let arr = []
    // loop through nums i
    for(let i = 0; i < nums.length; i++) {
        // new count
        let count = 0       
        
        
        // loop through nums j
        for(let j = 0; j < nums.length; j++) {
            
            // check if j = i
            if(j === i){
                console.log('hey')
                // if so, continue
                continue
            }

            // check if j < i
            if(nums[j] < nums[i]) {
                // if it is, add to count
                count++
            }
            
    
        }
        // push count into new array
        arr.push(count)
    }    
    return arr 
};

// console.log(smallerNumbersThanCurrent(numbers))





function lastStoneWeight(weights) {
    for(let i = 0; i < weights.length; i++) {
        for(let j = 0; j < weights.length; j++) {
            if(weights[j] > weights[j + 1]) {
                let tmp = weights[j];
                weights[j] = weights[j + 1];
                weights[j + 1] = tmp;
            }
        }
    }
    console.log(weights)

    // check last 2 value 
    for(let k = weights.length - 1; k >= 1; k--) {
        // remove if same   
        if(weights[k] === weights[k-1]) {
            weights.pop()
            weights.pop()
            k--
        } else if(weights[k] > weights[k-1]) {
            let num = weights[k] - weights[k-1]
            weights.pop()
            weights.pop()
            weights.push(num)
        } else {
            let num = weights[k-1] - weights[k]
            weights.pop()
            weights.pop()
            weights.push(num)
        }
        
    }

    return weights.length > 0 ? weights[0] : 0

}


// const nums = [32,46188086,339992587,742976890,801915058,393898202,717833291,843435009,361066046,884145908,668431192,586679703,792103686,85425451,246993674,134274127,586374055,923288873,292845117,399188845,842456591,410257930,333998862,16561419,624279391,459765367,969764608,508221973,82956997,437034793,553121267,554066040,199416087]

const nums = [9,4,6,2,9,3,6]

// console.log(lastStoneWeight(nums))

// -------------------------------------------------------------------------------------------------------------

// Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

// Example 1:

// Input: [3,1,2,4]
// Output: [2,4,3,1]
// The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.


function evenThenOdd(arr) {
    // store even and odd number in seperate arrays
    let odd = []
    let even = []

    // loop over input array 
    for(let i = 0; i < arr.length; i++) {
        // check odd or even for each number
        if(arr[i] % 2 === 0) {
            // if odd push to odd array
            even.push(arr[i])
        } else {
            // if even push to even array
            odd.push(arr[i])
        }
    }
    return even.concat(odd)
}

// console.log(evenThenOdd(nums))



// -------------------------------------------------------------------------------------------------------------


// Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

// Example 1:

// Input:  [-4,-1,0,3,10]
// Output: [0,1,9,16,100]


function sortedSquares(A) {
    // loop over array
    for (let i = 0; i < A.length; i++) {
        // square numbers
        A[i] = A[i] * A[i]
    }
    return A.sort((a, b) => a - b)
}

// sortedSquares([-4,-1,0,3,10])


// -------------------------------------------------------------------------------------------------------------


// Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.

// Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.

// You may return any answer array that satisfies this condition.

// Example 1:

// Input: [4,2,5,7]
// Output: [4,5,2,7]
// Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.

function paritySort(A) {
    // declare new, even and odd arrays
    const newArr = []
    const even = []
    const odd = []
    // loop over A
    for(let i = 0; i < A.length; i++) {
        // check odd or even for each number
        if(A[i] % 2 === 0) {
            // if odd push to odd
            even.push(A[i])
        } else {
            // if even push to even
            odd.push(A[i])
        }
    }

    // loop over even or odd
    for(let i = 0; i < even.length; i++) {
        // alternativly push into new array
        newArr.push(even[i],odd[i])
    }
    return newArr
}

// console.log(paritySort([4,2,5,7]))

// -------------------------------------------------------------------------------------------------------------
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

 

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.



function maxSubArray(nums) {
    // max 
    let trueMax = nums[0]
    // loop
    for(let i = 0; i < nums.length; i++) {
        let max = nums[i]
        
        if(max > trueMax) {
            trueMax = max
        }
        // inner loop
        for(let j = i+1; j < nums.length; j++) {
            max = max + nums[j]
            // add to temp max and check if it is bigger then max
            if(max > trueMax) {
                trueMax = max
            }
        }
    }
    return trueMax
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
