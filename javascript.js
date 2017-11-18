var hour = 12,
	isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
	alert('Office is closed either before 10 am or after 6 pm, or on the weekend');
}