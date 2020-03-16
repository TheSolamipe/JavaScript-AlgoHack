const _ = {
     reverseString: (string)=>{
          if(string === undefined ){
            return 'Enter all words you want to reverse';
          }else{
            // let letterCatcher = string.split('');                    /* splits word into letter and puts them in an array*/
            // let letTurner = letterCatcher.reverse();                /* reverses the position of the letters from first to last*/
            // let letterJoiner = letTurner.join('');                  /* joins the letters in the new array to form a reversed version of the entered word*/
            // return letterJoiner;

            // faster solution
            // return string.split('').reverse().join('');

            // second solution
            let final= '';
            for(let i = string.length -1 ; i >=0 ; i--){
              // console.log( string[i]);
              final += string[i];
            }
          return final;
          }
    }
}

console.log(_.reverseString( 'soma' ));
