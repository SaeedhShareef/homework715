console.log("Homeweerrrrrk")

firstArray = [
    [1,2,3],[4,5,6]
            ];

console.log(firstArray)

for (var i=0; i < firstArray.length; i++) {
    for (var j=0; j < firstArray[i].length; j++) {
      console.log(firstArray[i][j]);
    }
  }

  secondArray = [ [ ["a","b"] , ["c" , "d" ] , [ "e" , "f"] , [ "g" ,"h"] ] , [ "i","j" ] ]


  function whoBigger(firstNum,secondNum) {
      if ( firstNum > secondNum) {
            return "firstNum is bigger"
      }
        else return "secondNum is bigger"
    }
  console.log(whoBigger(40,10))

  function areTheyEqual(thirdNum,fourthNum) {
      if(thirdNum == fourthNum) {
          return "These numbers are equal"
      }
            else return "These numbers aint equal"
  }             console.log(areTheyEqual(45,45))