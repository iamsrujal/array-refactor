'use strict';

require('mocha');
var assert = require('assert');
var arrayRefactor = require('./');

describe('array-refactor', () => {
  it('should not modify array:', () => {
    let defaultArr = {
      "index": 0,
      "userToken": "93507d5b-64f3-4a74-ba91-4e3491049193",
      "isActive": false,
      "balance": "$2,495.32",
      "picture": "http://placehold.it/32x32"
    }
    let arr = {
      "index": 0,
      "userToken": "93507d5b-64f3-4a74-ba91-4e3491049193",
      "isActive": false,
      "balance": "$2,495.32",
      "picture": "http://placehold.it/32x32"
    };
    assert.deepEqual(arrayRefactor.pop([arr], ['password']), [defaultArr]);
    assert.deepEqual(arrayRefactor.pop([arr], "password"), [defaultArr]);
    assert.deepEqual(arrayRefactor.pop(arr, ["password"]), defaultArr);
    assert.deepEqual(arrayRefactor.pop(arr, "password"), defaultArr);
  });

  it('deep search for key and modify array or object:', () => {
    let arr = [
      [
        [
          {
            name: "srujal",
            password: '124343'
          }
        ]
      ]
    ]
    let output = [
      [
        [
          {
            name: 'srujal'
          }
        ]
      ]
    ]
    assert.deepEqual(arrayRefactor.pop(arr, 'password'), output);
  });

  it('should return the same array if no other args are passed or pass second args which is not in:', () => {
    assert.deepEqual(arrayRefactor.pop(['a', 'b', 'c']), ['a', 'b', 'c']);
    assert.deepEqual(arrayRefactor.pop(['a', 'b', 'c'], "second"), ['a', 'b', 'c']);
  });
});
