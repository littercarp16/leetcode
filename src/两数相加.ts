interface ListNode {
    val: number,
    next: ListNode | null
}
const addTwoNumbers = (l1: ListNode | null, l2: ListNode | null): ListNode | null  => {
    const getNodeLen = (l: ListNode | null, len: number = 0): number => {
        if(l && l.next){
            return getNodeLen(l.next, len + 1)
        }else {
            return len + 1
        }
    }
    const l1_len = getNodeLen(l1);
    const l2_len = getNodeLen(l2);
    let lt: ListNode;
    let lb: ListNode;
    if(l1_len > l2_len){
        lt = l1 || { val: 0, next: null};
        lb = l2 || { val: 0, next: null};
    }else{
        lt = l2 || { val: 0, next: null};
        lb = l1 || { val: 0, next: null};
    }
    const getSum = (lt: ListNode, lb: ListNode, isSetp: number = 0): ListNode =>{
        const sum = lt.val + lb.val + isSetp;
        if(sum > 9){
            // 进1
            return {
                val: sum - 10,
                next: lt.next ? getSum(lt.next, lb.next || { val: 0, next: null}, 1): { val: 1, next: null}
            }
        }else {
            return {
                val: sum,
                next: lt.next ? getSum(lt.next, lb.next || { val: 0, next: null}, 0): null
            }
        }
    }

    return getSum(lt, lb)
}