const _ = {
  truncator: (str, maxLength)=>{
    if(maxLength >= str.length){return str;}
    else if(maxLength > 3){ return str.substr(0,maxLength-3) + '...';}
      return str.substr(0,maxLength) + '...';

  }
}

console.log(_.truncator('You know how much that means, im flying without wings.', 2));

// let vowel = 'hi how you doing';
// console.log(vowel.substr(0,13));
