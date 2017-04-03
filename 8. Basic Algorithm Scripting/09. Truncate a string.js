
function truncateString(str, num) {
  if(str.length > num){
    var arr = str.split(' ');
    var res = '';
    var i = 0;
    if(arr[i].length > num){
      res += arr[i].substring(0, num);
      return res + '...';
    }
    
    res += arr[i];
    i++;
    
    while(res.length + arr[i].length < num-2) {
      res += ' ' + arr[i];
      i++;
    }
    
    return res + '...';
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
