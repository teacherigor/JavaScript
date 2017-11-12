var age = prompt('Age?', '');

var message = (age < 3) ? 'Hi, kid!' :
(age < 18) ? 'Hi!' :
(age < 100) ? 'Good day!' :
'What an unusual age!';

alert (message);