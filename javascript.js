var userName = prompt("Who's there?", '');

if (userName == 'Admin') {

	var pass = prompt('Enter your password', '');
	if (pass == 'Black Lord') {
		alert('Welcome!');
	} else if (pass == null) {
		alert('Way wrong answer!');
	} else {
		alert('Enter cancelled');
	}


} else if (userName == null) { // (**)
	alert ('Enter cancelled');
} else {
	alert ("I don't know you!");
}