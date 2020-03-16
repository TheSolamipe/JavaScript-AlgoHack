const _ ={
  rot13Decoder: (str)=>{
        let strCap= str.toUpperCase();
        let decodedWord='';
        for(let i = 0; i <strCap.length ; i++){
          let asciiNum = strCap[i].charCodeAt();
          if(asciiNum >= 65 && asciiNum <= 77) {
            decodedWord +=String.fromCharCode(asciiNum + 13);
          }else if(asciiNum >= 77 && asciiNum <= 90) {
            decodedWord +=String.fromCharCode(asciiNum - 13);
          }else{
            decodedWord += strCap[i];
          }
        }

        return decodedWord;
  }
}

console.log(_.rot13Decoder("v ybir lbh, tvey!"));
