// remove all falsy values from an array; this includes false, null, '', 0, undefined and NaN.
const _ ={
  falsyBouncer: (arr)=>{
      let truthies = [];
      for(let elem of arr){
        if(elem){
          truthies.push(elem);
        }
      }
      return truthies;
  }
}

console.log(_.falsyBouncer([40,'shall', false, 'amazing', 9, "", 0]))
