
function titleCase(str) {
  str = str.toLowerCase();
  
  var arr = str.split(' ');
  var len = arr.length;
  for(i = 0; i < len; i++){
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  str = arr.join(' ');
  return str;
}

titleCase("I'm a little tea pot");
