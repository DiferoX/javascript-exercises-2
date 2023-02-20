function mergeSort (array)
{
  if (array.length <= 1)
  {
    return array;
  }
  
  let middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge (left, right)
{
  let array = [];

  while (left.length && right.length)
  {
    if (left[0] < right[0])
    {
      array.push(left.shift());
    }
    else
    {
      array.push(right.shift());
    }
  }

  return array.concat(left.slice()).concat(right.slice());
}

console.log (mergeSort([5, 10, 1, 85, 20, 4, 99, 15, 100, 1, 6, 22, 2]));
