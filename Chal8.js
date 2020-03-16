const _ = {
  repeatAstring: (str, num)=>{
    if(num <= 0){return('');}
    return str.repeat(num);
  }
}

console.log(_.repeatAstring('what are the chances, we will end up dancing  ', -4))
