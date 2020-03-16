const _ = {
  palindrome: (string)=>{
    let regEx = /[\W_]/g;  /*This regular expression represents all no alpha numeric values(\W) also underscores(_) that appear globally(g)*/
    let finalCase = string.toLowerCase().replace(regEx, ""); //this takes our input to lowercase and removes all spaces and extra characters.
    let final = finalCase.split('').reverse().join('');  //this reverses the word in tr=erms of its letters positioning

    if(finalCase === final){
      return `${string} is spelt same as its reverse, Perfect Palindrome!`;
    }else{
      return `the reverse is ${final}, so not a Palindrome!`
    }
  }
}

console.log(_.palindrome('MAM AM'))
