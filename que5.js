// Given an array 'nums' of n integers where n > 1, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
let arr=[1,2,4,2];
for (let i=0;i<arr.length;i++){
    let pro=1;
    for(let j=0;j<arr.length;j++){
        if(i!=j){
            pro=pro*arr[j];
        }
    }
    console.log(pro);
}