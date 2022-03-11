var x = 0;
const array = Array();

function addWords() {
	array[x] = document.getElementById("word").value;
	$('#lists').append(array[x] + "<br>");
	++x;
}

function refreshPage() {
	location.reload();
}

function isWordInDictionary() {
	var val = document.getElementById('is_word').value;
	if ($.inArray(val, array) > -1) {
		window.alert("true");
	} else {
		window.alert("false");
	}
}
