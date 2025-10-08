/*function chess(n) {
  let board = "";

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // choose a space or a hash based on the sum of the coordinates
      board += ( (i + j) % 2 !== 0 ? " " : "#" );
    }
    board += "\n";    // end of this row
  }

  return board;
}
  
console.log(chess(20));

*/

/*function min(a,b){
  return (a<b ?a : b);
}
console.log(min(30,20))
*/
/*
function isValidElement(a){
  if(a === null || a === undefined || Number.isNaN(a)) {
    return false;
  };

  if(!Number.isInteger(a)){
    return false;
  }

  //let number = Math.abs(a);
  
  if (a < 0){
    return isValidElement(-a);
  }


  if(a === 0){
    return "even";
  }
  if(a ===1){
    return "odd";
  }

  return  isValidElement(a-2)
}

isValidElement()
console.log(isValidElement(50))

console.log(isValidElement(75))

console.log(isValidElement(-1))
*/

/*
const countBs = (string) => {
  let countB = 0;
  for(let i =0; i< string.length;i++){
    if(string[i] === "B"){
      countB++;
    }
   
  }
   return `Coutned B's: ${countB}`
} 

const countChar = (string, char) => {
  let countChar = 0;

  for(let i =0; i < string.length; i++) {
    if(string[i] === char){
      countChar++;
    }

  }
   return `Coutned ${char}'s: ${countChar}`
};

console.log(countBs(`On two occasions I have been asked, ‘Pray, Mr. Babbage, if you put
 into the machine wrong figures, will the right answers come out?’
 [...] I am not able rightly to apprehend the kind of confusion of ideas
 that could provoke such a question.`));

console.log(countChar(`On two occasions I have been asked, ‘Pray, Mr. Babbage, if you put
 into the machine wrong figures, will the right answers come out?’
 [...] I am not able rightly to apprehend the kind of confusion of ideas
 that could provoke such a question.`, 'I'));
 */