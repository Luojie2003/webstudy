var nums
var ans
nums = window.prompt()
nums = nums.sort();
for(let i=0; i<nums.length-1; i++) {
    if(nums[i] == nums[i+1]) ans += nums[i];
}
window.alert(ans)


// 将相同的值相邻，然后遍历去除重复值
function set(array){
    array.sort();
    var ans=[array[0]];
    for(var i = 1; i < array.length; i++){
        if( array[i] !== ans[ans.length-1])
        {
            ans.push(array[i]);
        }
    }
    return ans;
}


var reverseList = function(head, n) {
    let t = n/2+1
    let res = null
    let curr = head
    let i = 0
    while (curr){
        if (i == t)break
        curr = curr.next
        i = i + 1
    }
    while (curr) {
        const next=curr.next
        curr.next=res
        res=curr
        curr=next
    }
    return res
};

