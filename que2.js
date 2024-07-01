// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
function displayindex(arr,target){
    let product=1;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(j!=i){
                product=arr[i]+arr[j];
                if(product==target){
                    index1=i;
                    index2=j;
                }
            }
        }
    }
 return [index1,index2];

}
arr=[2,3,6,3,5,5];
let target=10;
console.log(displayindex(arr,target));
// arr=[2,3,6,4,5];
// let target=10;
// output:- 2,3;