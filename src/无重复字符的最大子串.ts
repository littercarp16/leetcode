const lengthOfLongestSubstring = (s: string): number => {
    if(s.length == 0) return 0;
    let result:number = 0;
    let map = new Map<string, number>();
    let left: number = 0;
    let right: number = 0;
    while(right < s.length){
        if(map.has(s[right]) && map.get(s[right])! >= left){
            left = map.get(s[right])! + 1;
        }
        map.set(s[right], right);
        result = Math.max(result, right - left + 1);
        right++;
    }

    
    return result;
};


const testData = [
    {
        key: " ",
        value: 1
    },
    {
        key: "au",
        value: 2
    },
    {
        key: "abba",
        value: 2
    },
    {
        key: "abcabcbb",
        value: 3
    },
    {
        key: "bbbbb",
        value: 1
    },
    {
        key: "pwwkew",
        value: 3
    },
]

testData.forEach((item)=>{
    console.log(item.key + ' --->>> ', lengthOfLongestSubstring(item.key) == item.value);
})