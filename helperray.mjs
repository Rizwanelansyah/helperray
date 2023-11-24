class Table {
  #values;
  #structure;
  constructor(structure) {
    this.#values = [];
    this.#structure = structure;
  }
  selectAll(callback = (val) => true) {
    let res = [];
    this.#values.forEach((val, idx) => {
      if(callback(val)) {
        res.push(this.#values[idx]);
      }
    });
    return res;
  }
  select(...fields) {
    if(fields.length < 1)throw new Error("Arguments Needed");
    let res = [];
    this.#values.forEach((val, index) => {
      let obj = {};
      fields.forEach(field => {
        obj[field] = val[field];
      });
      res.push(obj);
    });
    return res;
  }
  desc() {
    let strcs = this.#structure;
    strcs.forEach((strc, index) => {
      console.log(`-${index}-> ${strc[0]} - type = ${strc[1]}`);
    });
  }
  insert(...fields) {
    if(fields.length < this.#structure.length)throw new Error("Argument must be " + this.#structure.length);
    if(fields.length > this.#structure.length)throw new Error("Argument must be " + this.#structure.length);
    let newData = {};
    fields.forEach((field, index) => {
      let key = this.#structure[index]
      if(!(typeof field === key[1]))throw new Error(`${key[0]} field must be a ${key[1]}`);
      newData[key[0]] = field;
    });
    this.#values.push(newData);
  }
  inserts(...rows) {
    rows.forEach(row => {
      this.insert(...row);
    });
  }
  del(callback) {
    this.#values.forEach((data, idx) => {
      if(callback(data)) {
        delete this.#values[idx];
      }
    });
  }
  update(callback, ...commands) {
    this.#values.forEach((data, idx) => {
      if(callback(data)) {
        commands.forEach(command => {
          this.#values[idx][command[0]] = command[1];
        });
      }
    });
  }
}
class TimeTraverray {
  #values = [];
  #current = 0;
  #limit;
  constructor(array, limit = 5) {
    this.#values.push(array);
    this.#limit = limit;
  }
  get() {
    return this.#values[this.#current];
  }
  set(...array) {
    if(this.#current + 1 < this.#limit) {
      this.#current++;
    } else {
      this.#values.splice(0, 1);
    }
    this.#values.splice(this.#current + 1, this.#limit);
    this.#values[this.#current] = array;
  }
  undo(n = 1) {
    n = n < 0 ? -n : n;
    if(this.#current - n >= 0) {
      this.#current-= n;
    } else {
      this.#current = 0;
    }
    return this;
  }
  redo(n = 1) {
    n = n < 0 ? -n : n;
    if(this.#current + n < this.#values.length) {
      this.#current += n;
    } else {
      this.#current = this.#values.length - 1;
    }
    return this;
  }
  desc() {
    console.log(this.#values);
    console.log('limit :' + this.#limit)
    console.log('current :');
    console.log(this.get());
  }
}
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
function printTable(array, tableComp = {}) {
  let comp = {
    h: '-', v: '|', tl: '+', t: '+',
    tr: '+', l: '+', m: '+', r: '+',
    bl: '+', b: '+', br: '+'
  }
  let compKeys = Object.keys(tableComp);
  compKeys.forEach(ckey => {
    comp[ckey] = tableComp[ckey];
  });
  let lengths = [];
  let keys = Object.keys(array[0]);
  keys.forEach( key => {
    let vals = getAllValue(array, key);
    lengths.push((longestIn(vals).length > key.length ? longestIn(vals).length + 1 : key.length + 1));
  });
  let table = comp.tl;
  lengths.forEach( len => {
    table += comp.h.repeat(len + 2) + comp.t;
  });
  table = table.slice(0, -1);
  table += comp.tr + '\n' + comp.v;
  keys.forEach( (key, index) => {
    let endLong = lengths[index] - key.length + 1;
    table += ` ${key}${' '.repeat(endLong)}${comp.v}`;
  });
  table += '\n' + comp.l;
  lengths.forEach( len => {
    table += comp.h.repeat(len + 2) + comp.m;
  });
  table = table.slice(0, -1);
  table += comp.r;
  array.forEach( obj => {
    table += '\n' + comp.v;
    keys.forEach( (key, index) => {
      let endLong = lengths[index] - String(obj[key]).length + 1;
      table += ` ${obj[key]}${' '.repeat(endLong)}${comp.v}`;
    });
  });
  table += '\n' + comp.bl;
  lengths.forEach( len => {
    table += comp.h.repeat(len + 2) + comp.b;
  });
  table = table.slice(0, -1);
  table += comp.br;
  console.log(table);
}
function createTable(structure) {
  return new Table(structure);
}
const tableStyles = {
  corner : {
    h: '-', v: '|', tl: '/', t: '+',
    tr: '\\', l: '+', m: '+', r: '+',
    bl: '\\', b: '+', br: '/'
  },
  wavy: {
    h: '~', v: '|', tl: '~', t: '~',
    tr: '~', l: '~', m: '~', r: '~',
    bl: '~', b: '~', br: '~'
  },
  box: {
    h: '_', v: '|', tl: '.', t: '_',
    tr: '.', l: '[', m: '|', r: ']',
    bl: '|', b: '_', br: '|'
  },
  blank: {
    h: ' ', v: ' ', tl: ' ', t: ' ',
    tr: ' ', l: ' ', m: ' ', r: ' ',
    bl: ' ', b: ' ', br: ' '
  }
}
function makeTableStyle(c) {
  return {
    h: c, v: c, tl: c, t: c,
    tr: c, l: c, m: c, r: c,
    bl: c, b: c, br: c
  }
}
function createTimeTraverray(array, limit) {
  return new TimeTraverray(array, limit);
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
  setAllTo,
  printTable,
  createTable,
  tableStyles,
  makeTableStyle,
  createTimeTraverray
};