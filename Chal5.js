const _ = {
  firstLetterCapitalizer: (str)=>{
    let words = str.toLowerCase().split(" ").map(function(elem){
     return elem[0].toUpperCase() + elem.slice(1);
    })
    return words.join(" ");

    // Method 2
    // let words = str.toLowerCase().split(" ");
    // for(let i = 0; i< words.length ; i++){
    //   words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    // }
    // return words.join(' ');
  }
}

console.log(_.firstLetterCapitalizer('this is a wondeful day, i am going to be writing javascript all through'));
