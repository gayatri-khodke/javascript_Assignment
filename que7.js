// Find the kth largest element in an unsorted array.
let array=[5,6,2,3];
let k=3;
function largestnum(array,k){
    let sortarray=array.sort()
    let len=array.length;
    return sortarray[len-k];
}
console.log(largestnum(array,k));