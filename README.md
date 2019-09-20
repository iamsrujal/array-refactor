# array-refactor

## Installation

```
npm install array-refactor --save
```

Hide sensitive information from array or array of object

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
