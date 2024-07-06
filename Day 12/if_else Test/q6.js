// Write a JS program to input any character and check whether it is alphabet, digit or special character.

let char = 'C';
if (
    char == "a" ||
    char == "e" ||
    char == "i" ||
    char == "o" ||
    char == "u" ||
    char == "A" ||
    char == "E" ||
    char == "I" ||
    char == "O" ||
    char == "U" ||
    char == "B" ||
    char == "C" ||
    char == "D" ||
    char == "F" ||
    char == "G" ||
    char == "H" ||
    char == "J" ||
    char == "K" ||
    char == "L" ||
    char == "M" ||
    char == "N" ||
    char == "P" ||
    char == "Q" ||
    char == "R" ||
    char == "S" ||
    char == "T" ||
    char == "V" ||
    char == "W" ||
    char == "X" ||
    char == "Y" ||
    char == "Z" ||
    char == "b" ||
    char == "c" ||
    char == "d" ||
    char == "f" ||
    char == "g" ||
    char == "h" ||
    char == "j" ||
    char == "k" ||
    char == "l" ||
    char == "m" ||
    char == "n" ||
    char == "p" ||
    char == "q" ||
    char == "r" ||
    char == "s" ||
    char == "t" ||
    char == "v" ||
    char == "w" ||
    char == "x" ||
    char == "y" ||
    char == "z"
  ) {
    console.log("character is alphabet");
  } else if(char==0||char==1||char==2||char==3||char==4||char==5||char==6||char==7||char==8||char==9){
    console.log("It is a digit");
  } else{
    console.log("it is a special character")
  }