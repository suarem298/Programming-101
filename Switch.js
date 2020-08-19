//get the first char of a string and return a letter grade base on that.
function getLetter(s) {
    s=s.charAt(0);
    let letter;
    switch (s){

    case "a"||"e"||"i"||"o"||"e":
    letter= "A";
    break 

    case "b"||"c"||"d"||"f"||"g":
    letter= "B" ;
    break

    case "h"||"j"||"k"||"l"||"m":
    letter= "C";
    break 

    case "z"||"p"||"q"||"r"||"s"||"t"||"v"||"w"||"x"||"y"||"z":
    letter= "D"
    break 
            }
    
    return letter;
}

console.log(getLetter('zwxya'));