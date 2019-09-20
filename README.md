# array-refactor

## Installation

```
npm install array-refactor --save
```

## Usage

Hide sensitive information from object or array of object with deep searching.

Use of this array-refactor is refactor user or any personal data by having sensitive information and by using array-refactor you can remove that sensitive data before move to logs or public.
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
