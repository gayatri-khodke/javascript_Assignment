// Given an array of strings, group anagrams together.
let arr=['tea','ate','key','yke','std'];
function addanagram(arr){
    let a=[];
    for(let i=0;i<arr.length;i++){
            a.push(arr[i].split('').sort().join(''));
    }
    return a;
}
console.log(addanagram(arr));