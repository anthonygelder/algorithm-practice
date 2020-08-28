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

def quicksort(arr):
    sort(arr, 0, len(arr) - 1)
    return arr
    
def sort(arr, start, end):
      
      # base cases - Start >= end
    if start >= end:
        return
    left, right = start, end 
      # choose pivot and split array
    pivot = arr[(left + right) // 2]
    while left <= right:
        if arr[left] < pivot:
            left += 1
            continue
        if arr[right] > pivot:
            right -= 1
            continue
        
        if left <= right:
            arr[left], arr[right] = arr[right], arr[left]
            left += 1
            right -= 1
      
      # recusive call
    sort(arr, start, right)
    sort(arr, left, end)


    def quicksort(arr):
  
  def subsort(left, right):
    #base case
    if left >= right:
      return
      
    wall = left
    pivot_index = right
    pivot = arr[right]
  
    for i in range (left, right):
      if arr[i] < pivot:
        arr[i], arr[wall] = arr[wall], arr[i]
        wall += 1 

    #swap wall with pivot
    arr[wall], arr[pivot_index] = arr[pivot_index], arr[wall]

    subsort(left, wall-1)
    subsort(wall+1, right)
  
    
  subsort(0, len(arr)-1)
  return arr
  
  
print(quicksort(test))

https://leetcode.com/problems/kth-largest-element-in-an-array/solution/
def findKthLargest(self, nums: List[int], k: int) -> int:
        
        if not nums or not k:return None
        if k > len(nums): return None
        kk = len(nums) - k
        
        start, end = 0, len(nums)-1
        while start < end:
            mid = start
            pivot = end
            for i in range(start, end):              
                if nums[i] < nums[pivot]:
                    nums[i], nums[mid] = nums[mid], nums[i]
                    mid += 1

            nums[mid], nums[pivot] = nums[pivot], nums[mid]
            if mid == kk:
                return nums[kk]
            elif mid > kk:
                end = mid - 1
            else:
                start = mid + 1
                
        return None
