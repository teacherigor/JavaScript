'use strict';

 var myObj = {
	 gift: "pony",
	 pet: "kitten",
	 bed: "sleigh"
 };
 
 function checkObj(checkProp) {
	 if(myObj.hasOwnProperty(checkProp)) {
		 return myObj[checkProp];
	 } else {
		 return "Not Found";
	 }
	 
	 return "Change Me!";
 }
 
 checkObj("gift");