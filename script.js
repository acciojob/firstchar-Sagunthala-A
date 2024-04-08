function firstChar(text) {
  // your code here
	let trimmedText = text.trim();
	if(trimmedText ){
		return trimmedText[0]
	}else if(!trimmedText){
		return '';
	}

}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
