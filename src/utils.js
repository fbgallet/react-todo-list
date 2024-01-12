export const insertAsLastUndone = (arr, elt) => {
  let i = 0;
  while (i < arr.length && arr[i].done === false) {
    i++;
  }
  arr.splice(i, 0, elt);
  return arr;
};
