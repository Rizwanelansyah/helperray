function longestIn(array) {
  let longest = String(array[0]);
  for(let i = 1; i < array.length - 1; i++) {
    if( longest.length < String(array[i]).length) {
      longest = array[i];
    }
  }
  return longest;
}
function shortestIn(array) {
  let shortest = String(array[0]);
  for(let i = 1; i < array.length - 1; i++) {
    if( shortest.length > String(array[i]).length) {
      shortest = array[i];
    }
  }
  return shortest;
}
function shuffle(array) {
  let newArray = [], randomIndex;
  while(array.length > 0) {
    randomIndex = Math.round(Math.random() * (array.length - 1));
    newArray.push(array[randomIndex]);
    array.splice(randomIndex, 1);
  }
  array.push(...newArray);
}
function concatAll(array, joiner = "") {
  let newArray = [...array];
  return newArray.reduce((a, b) => a + joiner + b);
}
function concatFrom(array, from, to, joiner = "") {
  let arrayBuffer = [...array];
  let newArray = arrayBuffer.splice(from, (to - from + 1));
  return concatAll(newArray, joiner);
}
function max(array) {
  let max = array[0];
  for(let i = 1; i < array.length - 1; i++) {
    if( max < array[i]) {
      max = array[i];
    }
  }
  return max;
}
function min(array) {
  let min = array[0];
  for(let i = 1; i < array.length - 1; i++) {
    if( min > array[i]) {
      min = array[i];
    }
  }
  return min;
}
function sum(array) {
  let sum = 0;
  array.forEach(num => sum += num);
  return sum;
}
function average(array) {
  let avg = sum(array);
  avg /= array.length;
  return avg;
}
function joins(...arrays) {
  let res = [];
  arrays.forEach(array => res.push(...array));
  return res;
}
function isEquals(array) {
  let res = true;
  array.forEach(val => {
    if(val !== array[0])res = false;
  });
  return res;
}
function compareAll(array, method, comparer) {
  let res = true;
  array.forEach(val => {
    if(val !== comparer && method === '==')res = false;
    if(val === comparer && method === '!=')res = false;
    if(val >= comparer && method === '<')res = false;
    if(val <= comparer && method === '>')res = false;
    if(val < comparer && method === '>=')res = false;
    if(val > comparer && method === '<=')res = false;
  })
  return res;
}
function toggleAll(array) {
  let newArray = array.map(bool => !bool);
  array.splice(0, array.length);
  array.push(...newArray);
}
function howMany(array, target) {
  let many = 0;
  array.forEach(test => {
    if(test === target)many++;
  });
  return many;
}
function range(from, to, step = 1) {
  let array = [];
  step = step < 0 ? -step : step;
  if(to > from) {
    for(let i = from; i <= to; i += step) {
      array.push(i);
    }
  } else if (to < from) {
    for(let i = from; i >= to; i -= step) {
      array.push(i);
    }
  } else {
    throw new Error("The Step is Invalid!");
  }
  return array;
}
function getAllValue(array, key) {
  let newArray = [];
  array.forEach(obj => {
    newArray.push(obj[String(key)]);
  })
  return newArray;
}
function getRandom(array) {
  return array[Math.round(Math.random() * (array.length - 1))];
}
function makeRandomArr(length, template = range(0, 10)) {
  let newArray = [];
  for(let i = 0; i <= length; i++) {
    newArray.push(getRandom(template));
  }
  return newArray;
}
function setAllTo(array, value) {
  let newArray = array.map(() => value);
  array.splice(0, array.length);
  array.push(...newArray);
}

export default {
  longestIn,
  shortestIn,
  shuffle,
  concatAll,
  concatFrom,
  min,
  max,
  average,
  sum,
  joins,
  isEquals,
  compareAll,
  toggleAll,
  howMany,
  range,
  getAllValue,
  getRandom,
  makeRandomArr,
  setAllTo
};