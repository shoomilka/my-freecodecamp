
function palindrome(str) {
  str = str.toLowerCase().replace(/[\W_]+/g, '');
  var i;
  var len = str.length;
  if(len < 2) return true;
  for(i = 0; i < len/2; i++){
    if(str.charAt(i) != str.charAt(len-i-1)) return false;
  }
  return true;
}

palindrome("eye");
