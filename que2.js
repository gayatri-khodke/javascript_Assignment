// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
function displayindex(arr,target){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(i!=j){
                if(arr[i]+arr[j]==target){
                    return [i,j];
                }
            }
        }
    }
}
arr=[2,3,6,3,5,5];
let target=10;
console.log(displayindex(arr,target));
// arr=[2,3,6,4,5];
// let target=10;
// output:- 2,3;