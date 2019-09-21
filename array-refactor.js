/*!
 * array-refactor <https://github.com/iamsrujal/array-refactor>
 *
 * Copyright (c) 2019-2020, Srujal Patel.
 * Licensed under the MIT License.
 */

'use strict';

// Remove key from object function for array refactor
let arrayRefactorPop = (arr, arrayOfKeys) => {
  let temp = [];
  // check given varibale is type of array or object
  if (arr && typeof arr === 'object' && arrayOfKeys) {
    if (Array.isArray(arr)) {
      temp = arr.map(d => {
        return deleteKey(d, arrayOfKeys);
      });
    } else {
      // console.log()
      checkProperty(arr, arrayOfKeys);
      removeKey(arr, arrayOfKeys)
      temp = arr;
    }
  }
  if ((arr && typeof arr === 'object') || temp.length > 0 || Object.keys(temp).length > 0) {
    return temp;
  } else {
    if (!arrayOfKeys) {
      throw new Error("arrayRefactorPop Expects The Second Parameter To Be A String Or An Array Of Strings");
    } else {
      throw new Error("arrayRefactorPop Expects The First Argument To Be An Object Or Array Of Objects");
    }
  }
}

// Push object from object function for array refactor
let arrayRefactorPush = (arr, arrayOfKeys) => {
  let temp = [];
  // check given varibale is type of array or object
  if (arr && typeof arr === 'object' && arrayOfKeys) {
    if (Array.isArray(arr)) {
      temp = arr.map(d => {
        let obj = {};
        if (Array.isArray(arrayOfKeys)) {
          arrayOfKeys.forEach(k => {
            if (d.hasOwnProperty(k)) {
              // console.log(obj[k]);
              obj[k] = d[k];
            }
          });
        } else {
          if (d.hasOwnProperty(arrayOfKeys)) {
            obj[arrayOfKeys] = d[arrayOfKeys];
          }
        }
        return obj;
      })
    } else {
      let obj = {};
      if (Array.isArray(arrayOfKeys)) {
        arrayOfKeys.forEach(k => {
          if (arr.hasOwnProperty(k)) {
            obj[k] = arr[k];
          }
        });
      } else {
        if (arr.hasOwnProperty(arrayOfKeys)) {
          obj[arrayOfKeys] = arr[arrayOfKeys];
        }
      }
      temp = obj;
      // return temp;
    }
  }
  if ((arr && typeof arr === 'object') || temp.length > 0 || Object.keys(temp).length > 0) {
    return temp;
  } else {
    if (!arrayOfKeys) {
      throw new Error("arrayRefactorPop Expects The Second Parameter To Be A String Or An Array Of Strings");
    } else {
      throw new Error("arrayRefactorPop Expects The First Argument To Be An Object Or Array Of Objects");
    }
  }
}

// This recursion function is heart of array-refactor
function deleteKey(insideArr, arrayOfKeys) {
  if (Array.isArray(insideArr)) {
    return insideArr.map(d => {
      checkProperty(d, arrayOfKeys);
      removeKey(d, arrayOfKeys);
      return d;
    })
  } else {
    checkProperty(insideArr, arrayOfKeys);
    removeKey(insideArr, arrayOfKeys)
    return insideArr;
  }
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

// find out property is having an array or object
function checkProperty(arrObj, arrayOfKeys) {
  for (let prop in arrObj) {
    if (typeof arrObj[prop] === 'object' || Array.isArray(arrObj[prop])) {
      deleteKey(arrObj[prop], arrayOfKeys);
    }
  }
}

module.exports = {
  arrayRefactorPop,
  arrayRefactorPush

};
