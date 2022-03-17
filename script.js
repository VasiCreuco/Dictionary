var index = 0;
const array = [];

function addWords() {
	array[index] = document.getElementById("word").value;
	document.getElementById("word").value = '';
	document.getElementById("lists").innerHTML += array[index] + "<br>";
	++index;
}

function refreshPage() {
	location.reload();
}

function isWordInDictionary() {
	var word = document.getElementById("is_word").value;
	document.getElementById("is_word").value = '';
	if (array.indexOf(word) > -1) {
		window.alert("The word '" + word + "' is found in the dictionary");
	} else {
		window.alert("The word '" + word + "' is not found in the dictionary");
	}
}
