# array-refactor

## Installation

```
npm install array-refactor --save
```

## Usage

Hide/Show sensitive information from an object or array of objects with deep searching.

array-refactor is refactoring any sensitive data in user collection or any personal data. 

By using array-refactor you can remove given sensitive data before transfer to logs or public. You can also create new array or object for sensitive data. There are many uses of array-refactor.

```javascript
const arrayRefactor = require('array-refactor');

// There is no limit for array inside array

let arr = [{
    name: 'Srujal Patel',
    password: '12345678',
    userToken: 'xhfgg$3Ssf',
    Gender: 'Male',
    Address: 'address'
  }] 

// OR

let arr = {
  name: 'Srujal Patel',
  password: '12345678',
  userToken: 'xhfgg$3Ssf',
  Gender: 'Male',
  Address: 'address'
}

// keys are must be array or string for refactor

let keysArr = ['password', 'userToken']

// OR

let keysArr = 'password'

// Pop method will remove all objects given by keysArr (Object Keys)

let newArr = arrayRefactor.pop(arr, keysArr)

/* => 
      [{
        name: 'Srujal Patel',
        Gender: 'Male',
        Address: 'address'
      }]

    OR
      
      {
        name: 'Srujal Patel',
        Gender: 'Male',
        Address: 'address'
      }
*/

// Push method will remain in object or array basend on given by keysArr (Object Keys)

let newArr = arrayRefactor.push(arr, keysArr)

/* => 
      [{
        password: '12345678',
        userToken: 'xhfgg$3Ssf',
      }]

    OR

      {
        password: '12345678',
      }
*/
```

### Running tests

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

### Author

**Srujal Patel**

* [github/iamsrujal](https://github.com/iamsrujal)

### License
Copyright © 2020, [Srujal Patel](https://github.com/iamsrujal/array-refactor).
Released under the [MIT License](LICENSE).
