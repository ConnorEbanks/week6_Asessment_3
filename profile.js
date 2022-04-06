function handleColor(evt) {
	evt.preventDefault();
	
	alert('My favorite color is Navy Blue!');
}

function handlePlace(evt) {
	evt.preventDefault();
	
	alert('My favorite place is in the Mountains!');
}

function handleRitual(evt) {
	evt.preventDefault();
	
	alert('I do not have any rituals!');
}



let color = document.querySelector('button#color');
color.addEventListener('click', handleColor);

let place = document.querySelector('button#place');
place.addEventListener('click', handlePlace);

let ritual = document.querySelector('button#ritual');
ritual.addEventListener('click', handleRitual);
