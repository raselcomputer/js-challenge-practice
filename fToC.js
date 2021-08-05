// (32°F − 32) × 5/9




function fToC(farenheit){
    let fTemp = farenheit;
    let fToC = (fTemp - 32) * 5 / 9;
    return fToC;
}
var myFarenheit = fToC(100);
console.log(myFarenheit);