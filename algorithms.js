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

console.log(smallerNumbersThanCurrent(numbers))