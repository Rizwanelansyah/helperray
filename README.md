
# helperray
this package contains some function for help you with array

## Authors

- [@rizwanelansyah](https://www.github.com/rizwanelansyah)


## Installation

Install helperray with npm

```bash
  npm install helperray
```
    
## Usage/Examples

- import package
```javascript
import helperray from 'helperray';
```

-example :
```javascript
import helperray from 'helperray';

const names = ["Jhon", "Rick", "Tim", "Teddy", "Peter", "Gordon"];

console.log(helperray.longestIn(names)); // return 'Gordon'
console.log(helperray.shortestIn(names)); // return 'Tim'
```


## Functions

| function | params | return | description   |                
| :-------- | :------- | :----------------- |:----------------------|
| `longestIn()`      | `array:string[]` | `string` | get longest string in array |
| `shortestIn()` | `array:string[]` | `string` | get shortest string in array |
| `shuffle()` | `array:any[]` |  | shuffle the array |
| `concatAll()` | `array:any[], joiner?:string=""` | `string` | concat all values in array with joinner |
| `concatFrom()` | `array:any[], from:number, to:number, joiner?:string=""` | `string` | concat value from parameter from to parameter to with joiner |
| `max()` | `array:number[]` | `number` | get higher value in array |
| `min()` | `array:number[]` | `number` | get lowest value in array |
| `sum()` | `array:number[]` | `number` | get total of values in array |
| `average()` | `array:number[]` | `number` | get average value of values in array |
| `joins()` | `...arrays:any[]` | `any[]` | add arrays values into new array |
| `isEquals()` | `array:any[]` | `boolean` | return true if all value is same and false if not |
| `compareAll()` | `arrays:any[], method:string, value:any` | `boolean` | in method param you can use '==','!=','<','<=','>' and '>=' to compare all values in array with value |
| `toggleAll()` | `array:boolean[]` |  | turn false values to true and true values to false in array |
| `howMany()` | `array:any[], value:any` | `number` | return how many values same with value param |
| `range()` | `from:number, to:number, step?:number=1` | `number[]` | return array of number |
| `getAllValue()` | `array:object[], key:string` | `any[]` | return all selected properties value in array of object |
| `getRandom()` | `array:any[]` | `any` | get value in random index |
| `makeRandomArray()` | `length:number, template?:any[]=[1,2,3,4,5,6,7,8,9,10]` | `any[]` | make a random array the value is get in random index of template array param |

