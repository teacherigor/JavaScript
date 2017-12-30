'use strict';
//Profile lookup
var contacts = [
	{
		"firstName": "Akira",
		"lastName": "Latine",
		"number": "0543236543",
		"likes": ["Pizza", "Coding", "Brownie Points"]
	}
	{
		"firstName": "Harry",
		"lastName": "Potter",
		"number": "0994372684",
		"likes": ["Hogwards", "Magic", "Hagrid"]
	}
	{
		"firstName": "Sherlock",
		"lastName": "Holmes",
		"number": "0487345643",
		"likes": ["Intriguing Cases", "Violin"]
	}
	{
		"firstName": "Kristian",
		"lastName": "Vos",
		"number": "unknown",
		"likes": ["JavaScript", "Gaming", "Foxes"]
	}
];

<<<<<<< HEAD
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

return Math.floor(Math.random() * 10);

}

alert(return);
=======
function lookUpProfile(firstName, prop) {
	for (var x = 0; x < contacts.length; x++) {
		if (contacts[x].firstName === firstName) {
			if (contacts[x].hasOwnProperty(prop)) {
				return contacts[x][prop];
			} else {
				return "No such property";
			}
		}
	}
	
	return "No such contact";
}

lookUpProfile("Akira", "likes");
>>>>>>> 0066c1741ebf8b56e7c909daed588b75b19c091b
