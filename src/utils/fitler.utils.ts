function filter<T>(arr: Array<T>, value: string):Array<T> {
  return arr.sort(function (a:any, b:any) {
    if (a[value] > b[value]) {
      return 1;
    }
    if (a[value] < b[value]) {
      return -1;
    }
    return 0;
  }); 
}

export default filter