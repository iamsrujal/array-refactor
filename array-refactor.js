/*!
 * array-refactor <https://github.com/iamsrujal/array-refactor>
 *
 * Copyright (c) 2019-2020, Srujal Patel.
 * Licensed under the MIT License.
 */

'use strict';

// Main function for array refactor
let hideSensitiveData = (arr, arrayOfKeys) => {
  let temp = [];
  // check given varibale is type of array or object
  if (arr && typeof arr === 'object') {
    if (Array.isArray(arr)) {
      temp = arr.map(d => {
        return deleteKey(d);
      });
      // This recursion function is heart of array-refactor
      function deleteKey(insideArr) {
        if (Array.isArray(insideArr)) {
          return insideArr.map(d => {
            for (let prop in d) {
              if (typeof d[prop] === 'object' || Array.isArray(d[prop]))
                deleteKey(d[prop]);
            }
            removeKey(d, arrayOfKeys);
            return d;
          })
        } else {
          removeKey(insideArr, arrayOfKeys)
          return insideArr;
        }
      }
    } else {
      removeKey(arr, arrayOfKeys)
      temp = arr;
    }
  }
  return temp;
}

// remove key from object
function removeKey(insideArr, arrayOfKeys) {
  if (Array.isArray(arrayOfKeys)) {
    arrayOfKeys.forEach(k => {
      if (insideArr.hasOwnProperty(k)) {
        delete insideArr[k];
      }
    })
  } else {
    if (insideArr.hasOwnProperty(arrayOfKeys)) {
      delete insideArr[arrayOfKeys];
    }
  }
}

module.exports = hideSensitiveData;
