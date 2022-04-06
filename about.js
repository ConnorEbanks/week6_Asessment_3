console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Stop Clicking Me!');
}


const overMouse = (evt) => {
	evt.preventDefault();

	alert('Nice shoes!');
}




let img = document.querySelector('img')
img.addEventListener('mouseover', overMouse);

let form = document.querySelector('form#contact');
form.addEventListener('submit', handleSubmit);



