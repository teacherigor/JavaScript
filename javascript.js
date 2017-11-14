var value = prompt('Enter your login', '');

if (value == 'Admin') {
	alert('Enter password');
} else if (value == 'Other') {
	alert("I don't know you!" );
}else if (value == 'Escape') {
	alert('Enter cancelled');
}