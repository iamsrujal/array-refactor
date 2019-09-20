module.export = hideSensitiveData;

/**
 * Hide Sensitive functiona parameters
 * @param  {Array} arr
 * @param  {Array} arrayOfKeys
*/

let hideSensitiveData = (arr, arrayOfKeys) => {
  let temp;
  if (Array.isArray(arr)) {
    temp = arr.map(d => {
      arrayOfKeys.forEach(k => {
        if (d.hasOwnProperty(k)) {
          delete d[k];
        }
      })
      return d;
    })
  } else {
    if (Array.isArray(arrayOfKeys)) {
      arrayOfKeys.forEach(k => {
        delete arr[k];
      });
      temp = arr;
    } else {
      if (array.hasOwnProperty(arrayOfKeys)) {
        delete arr[arrayOfKeys];
      }
      temp = arr;
    }
  }
  return temp;
}
