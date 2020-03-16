const _ = {
  breakArrayintoChunk: (arr, numOfChunks)=>{
      let groups = [];
      while(arr.length > 0){
        groups.push(arr.slice(0,numOfChunks));
        arr= arr.slice(numOfChunks);
      }
      return groups;
  }
}

console.log(_.breakArrayintoChunk([23,56,78,69,22,45,67], 2));
