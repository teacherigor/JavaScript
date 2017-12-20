'use strict';

function abTest() {
	/*
	if (a < 0) {
		return undefined;
	} else if (b < 0) {
		return undefined;
	} else {
		return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2)); 
	}
	*/
	
	if (a < 0 || b < 0) {
		return undefined;
	} else {
		return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
	}
	
}

alert(abTest(2,2));