/*!
 * array-refactor <https://github.com/iamsrujal/array-refactor>
 *
 * Copyright (c) 2019-2020, Srujal Patel.
 * Licensed under the MIT License.
 */

'use strict';

// Remove key from object function for array refactor
/**
 * Remove key inside object or array of objects
 * @param {Object[]} arr - The element to search for.
 * @param {(string|string[])} arrayOfKeys - The key in this array of objects or object to remove.
*/
let pop = (arr, arrayOfKeys) => {
  let temp = [];
  // check given varibale is type of array or object
  if (arr && typeof arr === 'object') {
    let newArr = JSON.parse(JSON.stringify(arr));
    if (!arrayOfKeys) {
      return newArr;
    }
    if (Array.isArray(newArr)) {
      temp = newArr.map(d => {
        return deleteKey(d, arrayOfKeys);
      });
    } else {
      checkProperty(newArr, arrayOfKeys);
      removeKey(newArr, arrayOfKeys)
      temp = newArr;
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
/**
 * Push key with value inside object or array of objects and remove other key value pair
 * @param {Object[]} arr - The element to search for.
 * @param {(string|string[])} arrayOfKeys - The key in this array of objects or object to remain.
*/
let push = (arr, arrayOfKeys) => {
  let temp = [];
  // check given varibale is type of array or object
  if (arr && typeof arr === 'object') {
    let newArr = JSON.parse(JSON.stringify(arr));
    if (!arrayOfKeys) {
      return newArr;
    }
    if (Array.isArray(newArr)) {
      temp = newArr.map(d => {
        return deleteKeyForPush(d, arrayOfKeys);
      })
    } else {
      checkPropertyForPush(newArr, arrayOfKeys);
      removeOtherKeyForPush(newArr, arrayOfKeys);
      temp = newArr;
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
      if (typeof d === 'object') {
        removeKey(d, arrayOfKeys);
      }
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
      if (insideArr) {
        if (insideArr.hasOwnProperty(k)) {
          delete insideArr[k];
        }
      }
    })
  } else {
    if (insideArr) {
      if (insideArr.hasOwnProperty(arrayOfKeys)) {
        delete insideArr[arrayOfKeys];
      }
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

function deleteKeyForPush(insideArr, arrayOfKeys) {
  if (Array.isArray(insideArr)) {
    return insideArr.map(d => {
      checkPropertyForPush(d, arrayOfKeys);
      if (typeof d === 'object') {
        removeOtherKeyForPush(d, arrayOfKeys);
      }
      return d;
    })
  } else {
    checkPropertyForPush(insideArr, arrayOfKeys);
    removeOtherKeyForPush(insideArr, arrayOfKeys);
    return insideArr;
  }
}

function removeOtherKeyForPush(insideArr, arrayOfKeys) {
  if (insideArr) {
    if (Array.isArray(arrayOfKeys)) {
      for (let prop in insideArr) {
        if (!arrayOfKeys.includes(prop)) {
          delete insideArr[prop];
        }
      }
    } else {
      for (let prop in insideArr) {
        if (prop !== arrayOfKeys) {
          delete insideArr[prop];
        }
      }
    }
  }
}

function checkPropertyForPush(arrObj, arrayOfKeys) {
  for (let prop in arrObj) {
    if (typeof arrObj[prop] === 'object' || Array.isArray(arrObj[prop])) {
      deleteKeyForPush(arrObj[prop], arrayOfKeys);
      // removeKey(arrObj, arrayOfKeys);
    }
  }
}

module.exports = {
  pop,
  push
};
