
function findLongestWord(str) {
  var arr = str.split(' ');
  var max = 0;
  var tempe = 0;
  for(i = 0; i < arr.length; i++){
    tempe = arr[i].length;
    if(tempe > max) max = tempe;
  }
  return max;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
