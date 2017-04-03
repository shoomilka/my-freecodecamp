
function repeatStringNumTimes(str, num) {
  var res = '';
  for(i=0; i<num; i++) res += str;
  return res;
}

repeatStringNumTimes("abc", 3);
