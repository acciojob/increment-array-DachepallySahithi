let arr = [1, 2, 3, 4, 5];
function incrementArray(arr) {
  //your code here
	const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i] + 1);
  }
  return newArray;
}

alert(incrementArray(arr));
