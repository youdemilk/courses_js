function partitionOn(pred, items) {
    let arr1 = items.filter(el => !pred(el));
    let arr2 = items.filter(el => pred(el));
    items.splice(0);
    items.push(...arr1); 
    items.push(...arr2);
    return arr1.length;
  }