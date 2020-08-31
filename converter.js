function toRomanNumerals(number)
{
    //2 Arrays, Roman Numeral and Decimal
    const romNum = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
    const deciNum = [1000,900,500,400,100,90,50,40,10,9,5,4,1];

    let numref = parseInt(number); 

    let result ="";

    for (x = 0; x < romNum.length; x++)
    {
        while(numref >= deciNum[x]){
            result += romNum[x];
            numref -= deciNum[x];
        }
    }
    return console.log(result);
}



let input = prompt("Input a number: ");
toRomanNumerals(input);