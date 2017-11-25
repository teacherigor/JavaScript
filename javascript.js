// The first argument is true, that is why the second argument is returned
alert(1 && 0); //0
alert(1 && 5); //5

// The first argument is false, so it is returned, and the second argument is ignored
alert(null && 5); // null, because it is false
alert(0 && "No matter"); //0, because it is false