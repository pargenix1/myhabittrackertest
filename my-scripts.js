
//set count

if(localStorage.getItem("count") == null) {
	localStorage.setItem("count", 0)
}

//update count
function update() {
	document.getElementById("count").innerHTML = localStorage.getItem("count");
}

update();

//add one to count
function plusOne() {
	localStorage.setItem("count", (Number(localStorage.getItem("count")) + 1));
	update();
}

//reset count
function reset() {
	if (confirm("Are you sure you want to reset?")) {
    	localStorage.setItem("count",0);
		update();
	}
}

// save-to-phone instructions
var instructions = document.getElementById("instructions");
instructions.style.display = "none";

function toggleInstructions() {
	if (instructions.style.display === "none") {
		instructions.style.display = "block";
	} else {
		instructions.style.display = "none";
	}
}
