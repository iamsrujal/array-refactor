module.export = hideSensitiveData;


let hideSensitiveData = (array, arrayOfKeys) => {
  let tempArr = array.map(d => {
    arrayOfKeys.forEach(k => {
      if (d.hasOwnProperty(k)) {
        delete d[`${k}`];
      }
    })
    return d;
  })
  return tempArr;
}
