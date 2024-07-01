// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// let text='[({})]';
// function printValidString(str){
//     let len=str.length;
//     if(len%2==0){
//         let len=str.length;
//         let mid=len/2;
//         let str1=str.slice(0,mid);
//         let str2=str.slice(mid);
//         if(str1==str2){
//             return true;
//         }
//         else{
//             return false;
//         }
//     }
//     else{
//     let mid=Math.floor(len/2)+1;
//     let str1=str.slice(0,mid);
//     let str2=str.slice(mid);
//     if(str1==str2){
//         return true;
//     }
//     else{
//         return false;
//     }   
// }
// }
// console.log(printValidString(text));


let str='[{}]'
let len=str.length;
if(len%2==0){
    let mid=Math.floor(str.length/2);
    let str1=str.slice(0,mid);
    let str2=str.slice(mid);
    if(str1==str2){
        console.log('valid string');
    }
    else{
        console.log(str1,str2);
    }
}
else{
    console.log('not valid string');
}
