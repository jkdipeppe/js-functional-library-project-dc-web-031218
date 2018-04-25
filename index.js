fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, func) {
      for (const item in collection) {
        func(collection[item]);
      }
      return collection;
    },

    map: function(collection, func) {
      let arr = [];
      for (const item in collection) {
        arr.push(func(collection[item]));
      }
      return arr;
    },

    reduce: function(collection, func, start) {
      let sum = 0;
      if (start !== undefined) {
        sum = start;
      }
      for (const element of collection) {
        sum = func(sum, element, collection);
      }
      return sum;
    },

    find: function(collection, item) {
      for (const element in collection) {
        if (item(collection[element])) {
          return true;
        }
      }
      return false;
    },


    filter: function(collection, item) {
      // debugger;
      let arr = [];
      for (const element in collection) {
        if (item(collection[element])) {
          arr.push(collection[element]);
        }
      }
      return arr;
    },

    size: function(collection) {
      let counter = 0;
      for (const element in collection) {
        counter++;
      }
      return counter;
    },

    first: function(collection, num) {
      let counter = 0;
      let arr = [];
      if (num === undefined) {
        return collection[0];
      }
      while (counter < num) {
        arr.push(collection[counter]);
        counter ++;
      }
      return arr;
    },

    last: function(collection, num) {
      let counter = 0;
      for (const element in collection) {
        counter++;
      }
      if (num === undefined) {
        return collection[counter - 1];
      }
      let start = counter - num;
      let arr = [];
      while (start <= num) {
        arr.push(collection[start]);
        start ++;
      }

      return arr;
    },

    compact: function(collection) {
      let arr = [];
      for (const element in collection) {
        if (collection[element]) {
          arr.push(collection[element]);
        }
      }
      return arr;
    },

    sortBy: function(collection, func) {
      let arr = [];
      arr = this.map(collection,func);
      for(let i = 0; i < this.size(collection); i++) {
        if (arr[i + 1] < arr[i]) {
          item1 = arr[i];
          item2 = arr[i+1];
          arr[i] = item2;
          arr[i+1] = item1;
          i = -1;
        }
      }
      return arr;
    },

    flatten: function(collection, word) {
      let arr = [];
      if (word !== true) {
        function deepIterator(collection) {
          if (typeof collection === 'object') {
            for (const element in collection) {
              deepIterator(collection[element]);
            }
          } else {
            arr.push(collection);
          }
        }
        deepIterator(collection);
      } else {
        function shallowIterator(collection) {
          for (const key in collection) {
            if (typeof collection[key] === 'object') {
              for (const nestedKey in collection[key]) {
                arr.push(collection[key][nestedKey])
              }
            } else {
              arr.push(collection[key])
            }
          }
        }
        shallowIterator(collection);
      }
      return arr;
    },

    uniq: function(collection, filtered, iteratee) {
      if (iteratee === undefined) {
        let arr = [...collection];
        for(let i = 0; i < this.size(arr); i++) {
          for(let j = 0; j < this.size(arr); j++) {
            if ((arr[i] === arr[j]) && i !== j) {
              arr.splice(i, 1);
              i = -1;
              j = -1;
            }
          }
        }
        function sortArrFunction(val) { return val }
        arr = this.sortBy(arr, sortArrFunction);
        return arr;
      } else {

        let newObj = {};
        let newArr = [];

        for (const element in collection) {
          newObj[element] = iteratee(collection[element])
        }
        for (let i = 0; i < this.size(collection); i++) {
          if(newObj[i] !== undefined) {
            newArr.push(collection[i]);
            for (let j = i+1; j < this.size(collection); j++) {
              if (newObj[i] === newObj[j]) {
                delete newObj[j];
              }
            }
          }
        }
        return newArr;
      }
    },

    keys: function(collection) {
      let arr = [];
      for (const key in collection) {
        arr.push(key);
      }
      return arr;
    },

    values: function(collection) {
      let arr = [];
      for (const key in collection) {
        arr.push(collection[key]);
      }
      return arr;
    },

    functions: function(collection) {
      newArr = [];
      for (const key in collection) {
        if (typeof collection[key] === 'function') {
          newArr.push(key);
        }
      }
      function sortArrFunction(val) { return val }
      return this.sortBy(newArr, sortArrFunction);
    },


    giveMeMore: function() {
      return true;
    },


  }
})()

fi.libraryMethod()
