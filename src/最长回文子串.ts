function longestPalindromeByRound(s: string): string {
    // 中心扩散解法
    if(s.length < 2) return s;
    let start: number = 0;
    let maxLength: number = 1;
    const calcSubStr = (left: number, right: number) => {
        while(left >= 0 && right < s.length && s[left] == s[right]){
            if(maxLength < right - left + 1){
                start = left;
                maxLength = right - left + 1;
            }
            left--;
            right++;
        }
    }

    for(let i = 0; i < s.length; i++){
        calcSubStr(i, i);
        if(i < s.length - 1 && s[i] == s[i + 1]){
            calcSubStr(i, i + 1);
        }
    }
    return s.substring(start, start + maxLength);
};

function longestPalindromeByDP(s: string): string {
    // 动态规划
    let result: string = '';
    let dp: boolean[][] = [[]];
    for (let i = 0; i < s.length; i++) {
        dp[i] = []
    }
    for(let r = 0; r < s.length; r++){
        for(let l = 0; l <= r; l++){
            if(l == r) {
                dp[l][r] = true;
            }else if (l + 1 == r){
                dp[l][r] = s[l] == s[r];
            }else {
                dp[l][r] = dp[l+1][r-1] && s[l] == s[r]
            }
            if(dp[l][r] && r-l+1 > result.length){
                result = s.substring(l, r + 1)
            }
        }
    }
    return result;
}


// console.log(longestPalindromeByRound("abdbd"));
console.log(longestPalindromeByDP('abcadab'))