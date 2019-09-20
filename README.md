# array-refactor

## Installation

```
npm install array-refactor --save
```

## Usage

Hide sensitive information from an object or array of objects with deep searching.

array-refactor is refactoring any sensitive data in user collection or any personal data. 
Currently, by using array-refactor you can remove that sensitive data before transfer to logs or public.
There are many uses of array-refactor.

```javascript
const arrayRefactor = require('array-refactor');

// There is no limit for array inside array

let arr = [
  {
    name: 'Srujal Patel',
    password: '12345678',
    userToken: 'xhfgg$3Ssf',
    Gender: 'Male',
    Address: 'address'
  }
] 

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

arrayRefactor(arr, keysArr)
/* => [
        {
          name: 'Srujal Patel',
          Gender: 'Male',
          Address: 'address'
        }
      ]
    OR

    => {
          name: 'Srujal Patel',
          Gender: 'Male',
          Address: 'address'
        }
*/


```

## License

MIT
