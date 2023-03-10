var buttons = document.getElementsByTagName("button");

var result = document.getElementById("result");


for (i = 0; i<buttons.length; i++) {

	buttons[i].onclick = function() {
		var input = this.innerText;
		updateDisplay(input)
	}
}


function updateDisplay(input) {

	var currentDisplay = result.innerText

	if(currentDisplay == "0") {
		if(input != "Clr" && input != "Del" && input != "=" ){
			result.innerText = ""
			result.innerText += input
		}
	}

	else {
		if (input == "Del") {
			result.innerText = currentDisplay.substring(0,currentDisplay.length-1)
			if (result.innerText == "") {
				result.innerText="0"
			}
		}

		if (input == "Clr") {
			result.innerText = "0"
		}
		if (input!="Clr" && input!="Del" && input!="=") {
			result.innerText+=input	
		} 

		if (input == "=") {
			var display = result.innerText
			result.innerText = eval(display)

		}
	}

}
