// Collection Functions (Arrays or Objects)
function myEach(collection, callback) {
    let arr = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
    return collection;
}

function myMap(collection, callback) {
    let arr = Array.isArray(collection) ? collection : Object.values(collection);
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray.push(callback(arr[i]));
    }
    return newArray;
}

function myReduce(collection, callback, acc) {
    let arr = Array.isArray(collection) ? collection : Object.values(collection);
    let accumulator = acc !== undefined ? acc : arr[0];
    let startIndex = acc !== undefined ? 0 : 1;

    for (let i = startIndex; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i], collection);
    }
    return accumulator;
}

function myFind(collection, predicate) {
    let arr = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < arr.length; i++) {
        if (predicate(arr[i])) return arr[i];
    }
    return undefined;
}

function myFilter(collection, predicate) {
    let arr = Array.isArray(collection) ? collection : Object.values(collection);
    let resultArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (predicate(arr[i])) resultArray.push(arr[i]);
    }
    return resultArray;
}

function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}

// Array Functions
function myFirst(array, n) {
    return n ? array.slice(0, n) : array[0];
}

function myLast(array, n) {
    return n ? array.slice(-n) : array[array.length - 1];
}

// Bonus Functions
function mySortBy(array, callback) {
    let sortedArray = [...array];
    return sortedArray.sort((a, b) => {
        let aVal = callback(a);
        let bVal = callback(b);
        return (aVal > bVal) - (aVal < bVal);
    });
}

function myFlatten(array, shallow, newArr = []) {
    if (shallow) {
        for (let item of array) {
            Array.isArray(item) ? newArr.push(...item) : newArr.push(item);
        }
    } else {
        for (let item of array) {
            if (Array.isArray(item)) {
                myFlatten(item, false, newArr);
            } else {
                newArr.push(item);
            }
        }
    }
    return newArr;
}

// Object Functions
function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}
