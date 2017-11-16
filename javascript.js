/*
var message;

if (login == 'Vasia') {
	message = 'Hi';
} else if (login == 'Manager') {
	message = 'Hello';
} else if (login == '') {
	message = 'No login';
} else {
	message = '';
}

*/

var message = (login == 'Vasia') ? 'Hi' :
(login == 'Manager') ? 'Hello' :
(login == '') ? 'No login':
'';