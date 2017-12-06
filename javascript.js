// I declared a new var to print out the sentence
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
	var result = 'This ' + myAdjective + ' ' + myNoun + ' ' + myVerb + ' very ' + myAdverb + '.';
	
	return result;
}

var sentence = wordBlanks("dog", "big", "ran", "quickly");

alert(sentence);