function cardAlign () {
	var max = 0;
	var cards = document.querySelectorAll(".card-text");
	for (i of cards) {
		max = i.clientHeight > max ? i.clientHeight : max;
	}
	var value = max + "px";
	for (i of cards) {
		i.style.minHeight = value;
	}
}

cardAlign();

window.addEventListener("resize", cardAlign);

document.querySelector("#bhome").addEventListener("click", () => {
	document.querySelector('#home').scrollIntoView({ 
		behavior: 'smooth' 
	});
});

document.querySelector("#bprojects").addEventListener("click", () => {
	window.scroll({
		top: document.querySelectorAll("#home")[0].clientHeight, 
		left: 0, 
		behavior: 'smooth' 
	});
});

document.querySelector("#bcontact").addEventListener("click", () => {
	document.querySelector('#contact').scrollIntoView({ 
		behavior: 'smooth' 
	});
});