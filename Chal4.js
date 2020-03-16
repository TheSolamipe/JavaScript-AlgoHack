const _ = {
  LongestWordFinder: (str)=>{
      console.log('hi');
      let splitedWords = str.split(' ');
      let longest = '';

      for (let splitedWord of splitedWords) {
        if(splitedWord.length > longest.length){
          longest = splitedWord;
        }
      }
      return(`${longest} is the longest word with a length of ${longest.length}`) ;

  }
}


console.log(_.LongestWordFinder('hey my name is sola and , i am great'));
