const _ = {
  slasher: (arr, howMany)=>{
    let slashed = [];
    slashed.push(arr.slice(howMany));
    return slashed;
  }

}

console.log(_.slasher([2,5,6,4,3,8], 4));
