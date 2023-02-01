// * * * * s o l u t i o n 1 * * * * *

/*
S T E P S:
1. Test N is an integer
2. Convert N to Binary number
3. Create a loop that goes through the binary number
    3.1 Check if there is 1 found, so there is a gap -> count them

Assumptions:
- We know wer are in the end of a gap if there is a previous 1 found
*/

function solution(number) {
  const binaryN = number.toString(2); // "1001"
  console.log("binary n of " + number + " is: " + binaryN);
  let maxBinaryGap = 0;
  let hasGap = false;
  let counterBinaryGap = 0;

  //check N is integer
  if (Number.isInteger(number)) {
    //console.log("integer");
    //Loop
    for (let i = 0; i < binaryN.length; i++) {
      //console.log();
      if (binaryN[i] === "1") {
        //console.log("1 found");
        if (hasGap) {
          //update maxBinaryGap
          maxBinaryGap = Math.max(maxBinaryGap, counterBinaryGap);
        }
        hasGap = true;
        //reset counterBinaryGap
        counterBinaryGap = 0;
      } else if (binaryN[i] === "0") {
        //console.log("0 found");
        counterBinaryGap += 1;
      }
    }
    return console.log("return: " + maxBinaryGap);
  } else {
    console.log("number is NOT an integer!");
  }
}

//solution(2);
//solution(88);
//solution(-1.43);
//solution(1041);
//solution(32);
//solution(15);

// * * * * s o l u t i o n 2 * * * * *

/*
S T E P S:
1. Check N is an integer
2. Convert N to Binary number
3. Create a loop that goes through the binary number
   3.1. Identify a gap - starts and ends with 1
   - check no and positions of first 1
   - count zeros withing the gap
   3.2. Check numbers of gaps
   3.3. Compare gaps => Check biggest gap

   Requirements
   -Return 0 if N does not contain any binary gap
   
*/

function solution2(number) {
  //variables
  let binaryNumber = number.toString(2);
  console.log(binaryNumber);
  let currentMax = 0;
  let finalMax = 0;

  if (Number.isInteger(number)) {
    //console.log(number + " <= is an integer");
  } else {
    //console.log(number + " <= NOT an integer");
  }

  //loop
  for (let i = 0; i < binaryNumber.length; i++) {
    //console.log(binaryNumber[i]);
    //Condition1: si el caracter en la posicion i es igual a 1
    if (binaryNumber[i] == 1) {
      console.log(binaryNumber[i]);
      i++;
      while (binaryNumber[i] == 0 && i < binaryNumber.length) {
        console.log(binaryNumber[i]);
        currentMax++;
        i++;
      }
    }
    //Condition2: si i es igual a la long del binario y el caracter no es 1
    if (i == binaryNumber.length && binaryNumber[i] != 1) {
      currentMax = 0;
    }
    //Condition3
    if (finalMax < currentMax) {
      finalMax = currentMax;
      currentMax = 0;
    }
    i--;
  }
  //end of the loop
  currentMax = 0;
  console.log(finalMax);
  console.log("******");

  return finalMax;
}

//solution2(8);
//solution2(-1.43);
solution2(1041);
solution2(32);
solution2(15);
