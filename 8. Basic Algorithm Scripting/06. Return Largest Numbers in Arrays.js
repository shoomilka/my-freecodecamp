
function largestOfFour(arr) {
  var len = arr.length;
  var res = [];
  for(i = 0; i < len; i++){
    var l = arr[i].length;
    var max = 0;
    for(j = 0; j < l; j++){
      if(arr[i][j] > max) max = arr[i][j];
    }
    res.push(max);
  }
  return res;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
