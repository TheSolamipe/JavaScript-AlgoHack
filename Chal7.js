const _ = {
  confirmEnding: (str, target)=>{
      if(str.substr(-target.length) === target){
        return(`${target} ==>> is the last of || ${str}`);
      }return(`${target} ==>> didn't end || ${str}!`);

      // if(str.endsWith(target)){return true;}return false;
  }
}

console.log(_.confirmEnding("Leonardo", "o"));
console.log(_.confirmEnding("Da vinci", "o"));
console.log(_.confirmEnding("all of your fears, just cast them on me", "me"));
