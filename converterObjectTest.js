function toRomanNumerals(number)
{
    const romNumbers = {
        M:1000,
        CM:900,
        D:500,
        CD:400,
        C:100,
        XC:90,
        L:50,
        XV: 40,
        X:10,
        IX:9,
        V:5,
        IV:4,
        I:1};

    let result ="";


        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

    //Create a loop that goes through the array of Objects

    //for (const key in romNumbers)
    //{
    //    while(numref >= deciNum[x]){
    //        result += romNum[x];
    //        num -= romNumbers[key];
    //    }
    //}
    return console.log(result);
}



let input = prompt("Input a number: ");
toRomanNumerals(input);



    


