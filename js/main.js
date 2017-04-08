
function coinToss () {
	var chance = Math.floor(Math.random() * 2)
	var coinFlip = document.getElementById("coinFlipper")
	
	
	if (chance == 0) {
		alert("heads wins")
			coinFlip.src = "img/heads.png"
} 

	else {
		alert("tails wins")
			coinFlip.src = "img/tails.png"
	}
}

