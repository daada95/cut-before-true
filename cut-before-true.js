function cutBeforeTrue(arr, func) {
  let arrOriginal = arr;
  let arrModified = [];

  for (let i = 0; i < arrOriginal.length; i++) {
    if (func(arrOriginal[i])) {
      console.log("it happens");
      arrModified = arrOriginal.slice(i);
      break;
    } 
  }
  
  return arrModified;
}
