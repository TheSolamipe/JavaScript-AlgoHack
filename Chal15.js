const _ = {
    indexFinder: (arr, num)=>{
        arr.push(num);
        arr.sort(function(a,b){
          return a-b;
        })
        return arr.indexOf(num);

    }
}

console.log(_.indexFinder([24,12,60,36,72], 52));
