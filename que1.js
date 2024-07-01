// Write a function to generate the first n numbers in the Fibonacci sequence.
function fibonacci(n){
    let arr=[0,1];
    for(let i=2;i<n;i++){
        arr.push(arr[i-1]+arr[i-2]);
    }
    return arr;
}
const num=6;
console.log(fibonacci(num));
// [0,1,1,2,3]