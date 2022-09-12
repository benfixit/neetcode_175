/**
 * @param {number[]} nums
 * @return {number}
 */
 var findDuplicate = function(nums) {
    let fast = 0, slow = 0;
    
    while (true){
        console.log("before == ", slow, fast)
        slow = nums[slow];
        fast = nums[nums[fast]];
        console.log("after == ", slow, fast)

        
        if (fast === slow){
            break;
        }
    }
    
    slow2 = 0;
    
    while (true){
        slow = nums[slow];
        slow2 = nums[slow2];
        
        if (slow === slow2){
            return slow
        }
    }
};


console.log(findDuplicate([1, 3, 4, 2, 2]))