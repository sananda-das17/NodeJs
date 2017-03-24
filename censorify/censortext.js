var censoredWords = ["bad", "sad", "mad"];
var  customcensoredWord = [];
function censor (inStr) {
	for (idx in censoredWords){
		inStr = inStr.replace(censoredWords[idx], "****");
	}
	for (idx in customcensoredWord){
		inStr = inStr.replace(customcensoredWord[idx], "****");
	}
	return inStr;
}
function addcensoredWord(word) {
	customcensoredWord.push(word);
}
function getcensoredWord() {
	return censoredWords.concat(customcensoredWord);
}
exports.censor = censor;
exports.addcensoredWord = addcensoredWord;
exports.getcensoredWord = getcensoredWord;