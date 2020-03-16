const _ = {
    destroyer: (arr)=>{
      // get all the arguments we intend checking the array without
      let args = Array.from(arguments);
      args.splice(0,1);
      let targets = args;
      console.log(targets);
      let result = [];

      for(let num of arr){
        if(targets.indexOf(num) === -1){
          result.push(num);
        }
      }
      return result;
    }
}

console.log(_.destroyer([43,5,6,2,7,98,10],2,5))
