var undef; //var is not assigned, i.e. is equal to undefined
var zero = 0;
var emptyStr = "";
var msg = "Hi!";

var result = undef || zero || emptyStr || msg || 0;

alert(result); // print out "Hi!" value, which is true