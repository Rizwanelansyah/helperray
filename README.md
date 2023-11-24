
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

-example 1 :
```javascript
import helperray from 'helperray';

const names = ["Jhon", "Rick", "Tim", "Teddy", "Peter", "Gordon"];

console.log(helperray.longestIn(names)); // return 'Gordon'
console.log(helperray.shortestIn(names)); // return 'Tim'
```

-example 2 :
```javascript
import helperray from 'helperray';
const { range, average, sum, concatAll } = helperray;

const number = range(0,9);
console.log(number) // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(average(number)); //4.5
console.log(sum(number)); //45
shuffle(number);
console.log(concatAll(number, ' - '));
// print a random number like this
// '5 - 8 - 3 - 7 - 6 - 4 - 2 - 9 - 0 - 1'
```

-example 3 
```javascript
import helperray from './helperray.mjs';
const { printTable, tableStyles } = helperray;

const persons = [
  {name: 'Jhony', age: 25},
  {name: 'Tommy', age: 32},
  {name: 'Selma', age: 27},
  {name: 'Bruce', age: 29},
  {name: 'Penny', age: 34}
];
printable(persons);
printable(persons, tableStyles.blank);
```
-- output
```bash
+--------+------+
| name   | age  |
+--------+------+
| Jhony  | 25   |
| Tommy  | 32   |
| Selma  | 27   |
| Bruce  | 29   |
| Penny  | 34   |
+--------+------+
                 
  name     age   
                 
  Jhony    25    
  Tommy    32    
  Selma    27    
  Bruce    29    
  Penny    34    
                 
```

-example 4
```javascript
import helperray from './helperray.mjs';
const { printTable, createTable } = helperray;

const users = createTable([
  ['username', 'string'],
  ['password', 'string'],
  ['premium', 'boolean']
]);
users.insert('fidzh100', 'secretPassword', false);
users.inserts(
  ['supertank', 'battleTimez', true],
  ['lazyBomb25', 'ihave500bomb', true],
  ["imhappy", 'bigcake', false]
);
printTable(users.selectAll());
printTable(users.selectAll(user => user.premium));
printTable(users.select('premium', 'username', 'password'));
users.desc();
users.del(user => user.username === 'lazyBomb25');
printTable(users.selectAll());
users.update(
  user => user.username === "imhappy",
  ['username', 'imnothappy']
);
printTable(users.selectAll());
```
-- output
```bash
+-------------+-----------------+----------+
| username    | password        | premium  |
+-------------+-----------------+----------+
| fidzh100    | secretPassword  | false    |
| supertank   | battleTimez     | true     |
| lazyBomb25  | ihave500bomb    | true     |
| imhappy     | bigcake         | false    |
+-------------+-----------------+----------+
+------------+--------------+----------+
| username   | password     | premium  |
+------------+--------------+----------+
| supertank  | battleTimez  | true     |
| lazyBomb25 | ihave500bomb | true     |
+------------+--------------+----------+
+----------+-------------+-----------------+
| premium  | username    | password        |
+----------+-------------+-----------------+
| false    | fidzh100    | secretPassword  |
| true     | supertank   | battleTimez     |
| true     | lazyBomb25  | ihave500bomb    |
| false    | imhappy     | bigcake         |
+----------+-------------+-----------------+
-0-> username - type = string
-1-> password - type = string
-2-> premium - type = boolean
+------------+-----------------+----------+
| username   | password        | premium  |
+------------+-----------------+----------+
| fidzh100   | secretPassword  | false    |
| supertank  | battleTimez     | true     |
| imhappy    | bigcake         | false    |
+------------+-----------------+----------+
+------------+-----------------+----------+
| username   | password        | premium  |
+------------+-----------------+----------+
| fidzh100   | secretPassword  | false    |
| supertank  | battleTimez     | true     |
| imnothappy | bigcake         | false    |
+------------+-----------------+----------+
```
-example 5 
```javascript
import helperray from './helperray.mjs';
const { createTimeTraverray, joins } = helperray;

const number = createTimeTraverray([1, 2, 3, 4, 5], 5);
console.log(number.get());
console.log('');
number.set(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(number.get());
console.log('');
number.set(...joins([-5, -4, -3, -2, -1], number.get()));
number.set(...joins([-9, -8, -7, -6], number.get()));
console.log(number.get());
console.log('');
number.undo();
console.log(number.get());
console.log('');
number.undo(10);
console.log(number.get());
console.log('');
number.desc();
console.log('');
number.set(6, 7, 8, 9, 10);
number.desc();
console.log('');
number.set(...joins(number.undo().get(), number.redo().get()));
number.desc();
console.log('');
number.set(1, 2, 3);
number.undo(10);
console.log(number.get());
console.log('');
number.redo();
console.log(number.get());
console.log('');
number.redo(100);
console.log(number.get());
console.log('');
number.set(1);
number.set(2);
number.set(3);
number.set(4);
number.set(5);
number.set(6);
number.set(7);
number.desc();
console.log('');
```
-- output 
```bash
[ 1, 2, 3, 4, 5 ]

[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

[ -9, -8, -7, -6, -5, -4, -3, -2, -1,  0,  1,  2,  3,  4, 5,  6,  7,  8,  9 ]

[ -5, -4, -3, -2, -1, 0, 1,  2,  3,  4,  5, 6, 7,  8,  9 ]

[ 1, 2, 3, 4, 5 ]

[
  [ 1, 2, 3, 4, 5 ],
  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
  [ -5, -4, -3, -2, -1, 0, 1,  2,  3,  4,  5, 6, 7,  8,  9 ],
  [ -9, -8, -7, -6, -5, -4, -3, -2, -1,  0,  1,  2,  3,  4, 5,  6,  7,  8,  9 ]
]
limit :5
current :
[ 1, 2, 3, 4, 5 ]

[ [ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9, 10 ] ]
limit :5
current :
[ 6, 7, 8, 9, 10 ]

[
  [ 1, 2, 3, 4, 5 ],
  [ 6, 7, 8, 9, 10 ],
  [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]
]
limit :5
current :
[ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]

[ 1, 2, 3, 4, 5 ]

[ 6, 7, 8, 9, 10 ]

[ 1, 2, 3 ]

[ [ 3 ], [ 4 ], [ 5 ], [ 6 ], [ 7 ] ]
limit :5
current :
[ 7 ]

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
| `makeRandomArr()` | `length:number, template?:any[]=[1,2,3,4,5,6,7,8,9,10]` | `any[]` | make a random array the value is get in random index of template array param |
| `setAllTo()` | `array:any[], to:any` |  | set all valuenin array to value of "to" param |
| `printTable()` | `array:object[], tableStyle?:object=defaultStyle` |  | print table into terminal |
| `createTable()` | `structure:any[]` | `Table` | create table structure and return the instance of class Table |
| `createTableStyle()` | `char:string[]` | `object` | create a table style with same component for use in `printTable()` |
| `createTimeTraverray()` | `array:any[], limit?:number=5` | `TimeTraverray` | create a TimeTraverray instance |

## Consts
#### tableStyles.corner : tableStyle
#### tableStyles.wavy : tableStyle
#### tableStyles.box : tableStyle
#### tableStyles.blank : tableStyle

## Classes
### - Table
#### the Table is an array of object with the properties is ruled with the table structure.
##### properties
###### - private structure => structure use for rule the table
###### - private values => values of the table
##### methods 
###### - selectAll(filter?: callback()): object[] => if you dont input the callback you get all values of the table if input the callback the call back is used for filter the values, callback must return boolean
###### - select(...colums: any): object[] => to select which columns the values will be taken from
###### - desc() => print the description of the table to terminal
###### - insert(...values) => insert new object to table
###### - inserts(...valueses) => inserts new objects to table
###### - del(filter: callback()) => delete the filtered object with callback in table
###### - update(filter: callback(), ...commands: any[]) => update the filtered object with callback in table
### - TimeTraverray
#### the array where you can do undo() and redo()
##### properties
###### - private values => values of the TimeTraverray
###### - private current => current value of TimeTraverray
###### - private limit => limit of TimeTraverray
##### methods
###### - get(): any[] => get the value
###### - set(...array:any) => set the value
###### - undo(many:number) => undo the value to before you setted
###### - redo(many:number) => to redo latest undo
###### - desc() => print the description of TimeTraverray
