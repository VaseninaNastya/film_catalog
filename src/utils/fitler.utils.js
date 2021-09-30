

function filter(arr, value) {
  return arr.sort(function (a, b) {
    if (a[value] > b[value]) {
      return 1;
    }
    if (a[value] < b[value]) {
      return -1;
    }
    return 0;
  }); 
}

export default filter;