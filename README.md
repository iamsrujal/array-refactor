# array-refactor

## Installation

```
npm install array-refactor --save
```

Hide sensitive information from array or array of object with deep searching.

Use of this array-refactor is maintaing log data but that data is having sensitive insormation and by using array-refactor you can remove that sensitive data before move into logs still there are many use of array-refactor.

## Usage

```javascript
const arrayRefactor = require('array-refactor');

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

// keys are must be array for refactor

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
