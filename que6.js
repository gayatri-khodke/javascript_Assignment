// Given an array of strings, group anagrams together.
let arr=['tea','ate','key','yke','std'];
function addanagram(arr){
    let a=[];
    for(let i=0;i<arr.length;i++){
            a.push(arr[i].split('').sort().join(''));
    }
    let result=[];
    let k=[];
    for(let j=0;j<arr.length;j++){
        
    }
}
console.log(addanagram(arr));