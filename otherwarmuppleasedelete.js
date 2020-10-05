// function charMatchCase(string){
//     if (string === string.toLowerCase()){
//         return true;
//     } else if (string === string.toUpperCase()){
//         return true;
//     } else {
//         return false;
//     }
// }

//OR------

function charMatchCase(string){
    return (string === string.toLowerCase() || string === string.toUpperCase());
}

console.log (charMatchCase("hello world"));
console.log (charMatchCase("HELLO WORLD"));
console.log (charMatchCase("heLLo WoRld"));