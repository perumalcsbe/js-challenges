## Binary Search 

### Iterative
```js
const binarySearch = (arr, needle) => {
  let left = 0; // first index
  let right = arr.length; // last index
  
  while(left <= right) {
    
    // Find middle index
    let mid = left + ((right - left) >>> 1); //Math.floor((left + right) / 2);
    
    // if array middle index is needle then return middle index
    if (arr[mid] === needle) {
      return mid;
    } else if (arr[mid] < needle) { // if array middle element is less than needle then needle may be in right sub array
      left = mid + 1;
    } else {
      right = mid - 1; // if array middle element is greater than needle then needle may be in left sub array
    }
  }
  
  // not found
  return -1;
};
```

### Recurive
```js
const binarySearch = (arr, left, right, needle) => {
  if (left <= right) {
    let mid = left + ((right - left) >>> 1); //Math.floor((left + right) / 2);
    
    if (arr[mid] === needle) {
      return mid;
    } else if (arr[mid] < needle) {
      return binarySearch(arr, mid + 1, right, needle);
    } else {
      return binarySearch(arr, left, mid - 1, needle);
    }
  }
  
  // not found
  return -1;
};
```
