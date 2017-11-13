var age = prompt('Age?', '');

if (age < 3) {
	message = 'Hi, kid!';
} else if (age < 18) {
	message = 'Hello!';
} else if (age < 100) {
	message = 'Good day!';
} else {
	message = 'What an unsual age!';
}

alert (message);