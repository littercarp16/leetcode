const twoSum = (nums: number[], target: number): number[] => { 
    if(nums?.length < 2){
        return [-1,-1]
    }
    let map = new Map<number, number>();
    for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i])){
            return [map.get(nums[i])!, i]
        }
        map.set(target - nums[i], i)
    }
    return [-1, -1]
}
console.log(twoSum([1,2,4,6], 6))