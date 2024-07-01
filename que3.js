// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
let text='{[()]}';
let len=text.length;
let mid=len/2;
console.log(mid);
let str1=text.slice(0,mid);
let str2=text.slice(mid);
console.log(str1,str2);
if(str1==str2){
    console.log('valid string');
}
else{
    console.log('not valid');
}
