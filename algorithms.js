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

console.log(lastStoneWeight(nums))