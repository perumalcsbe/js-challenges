# Array

### Find pivot index
> e.g. arr = [1, 7, 3, 6, 5, 6] where 3 is pivot index because (excluding index 3) left subarray sum equals to right subarray

```js
const pivotIndex = (arr) => {
  
  const sum = arr.reduce((s, n) => s + n, 0);
  let leftSum = 0;
  for(let i = 0; i < arr.length; i++) {
    if (leftSum === (sum - leftSum - arr[i])) return i;
    
    leftSum += arr[i];
  }
  
  return -1;
};
```
