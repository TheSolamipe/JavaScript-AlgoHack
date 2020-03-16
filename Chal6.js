const _ = {
  largestNumbersFinder: (arr)=>{
    let arrayOfLargest = [];
    for(let i=0; i<arr.length; i++){
      let largestNumber = arr[i][0];
      for(let j=0; j<arr[i].length; j++){
        if(arr[i][j] > largestNumber) largestNumber = arr[i][j];
      }
      arrayOfLargest.push(largestNumber);
    }
    return arrayOfLargest;
  }
}

console.log(_.largestNumbersFinder([[2,4,6],[1,3,5],[9,5,8],[100, 43, 567]]));
