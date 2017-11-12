var year = prompt("Enter the date when the ECMA-262 5.1 standard was released", "");

if (year < 2011) {
	alert ("It's too early...");
} else if (year > 2011) {
	alert ("It's a little bit late...");
} else {
	alert ("Yes, this year precisely!");
}