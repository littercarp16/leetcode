function maxArea(height: number[]): number {
    let left: number = 0;
    let right: number = height.length - 1;
    let area: number = 0;
    while(left < right){
        const currArea = (right - left) * Math.min(height[left], height[right])
        if(currArea > area){
            area = currArea;
        }
        if(height[left] < height[right]){
            left++;
        }else{
            right--
        }
    }
    return area;
};

console.log(maxArea([1,4,7,8,5,6]))


