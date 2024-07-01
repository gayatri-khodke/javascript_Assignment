// Write a function to check if a given string is a palindrome.
function checkpalindrome(str){
    let str1=str.split('').reverse().join('');
    if(str==str1){
        return true;
    }
    else{
        return false;
    }
}
let text='madam';
console.log(checkpalindrome(text));