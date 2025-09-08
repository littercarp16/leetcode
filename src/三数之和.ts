function threeSum(nums: number[]): number[][] {
    let treeNums: number[][] = [];
    nums.sort((a, b)=> a - b);
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > 0) break;
        if(nums[i] == nums[i - 1] && i > 0) {
            continue;
        };
        let left = i + 1;
        let right = nums.length - 1;
        while(left < right){
            const currSum = nums[i] + nums[left] + nums[right];
            if(currSum == 0){
                treeNums.push([nums[i], nums[left], nums[right]])
                while(left < right && nums[left] == nums[left + 1]) left++;
                while(left < right && nums[right] == nums[right + 1]) right--;
                left++;
                right--;
            }else if(currSum > 0){
                right--;
            }else{
                left++
            }

        }
    }

    return treeNums;
};

console.log('result', threeSum([2,-3,0,-2,-5,-5,-4,1,2,-2,2,0,2,-4,5,5,-10]));