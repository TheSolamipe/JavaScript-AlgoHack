const _ ={
  factorializer: (number)=>{
    let index= 1;
    for(let i = number ; i > 0 ; i--){
      index *= i;
    }
    return index;
  }
}

console.log(_.factorializer(40))
