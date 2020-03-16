const _ = {
  mutator: (arr)=>{
    let mut1 = arr[0].toLowerCase();
    let mut2 = arr[1].toLowerCase();
    console.log(mut2);

    for(let i= 0; i < mut2.length ; i++){
      if(mut1.indexOf(mut2[i]) === -1){return false};

    }
    return true;
    // if(all element of mut2 exist in mut1){return true;}
    // return false;
  }
}

console.log(_.mutator(['absolute', 'SAlute']));
console.log(_.mutator(['amazing', 'sinG']));
console.log(_.mutator(['delicious', 'sIde']));
