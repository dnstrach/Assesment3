console.log("hello world");

const imgCat = document.querySelector('img');



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submited');
}

const imageHover = () => {
	alert('Happy Friday!')	
}

// imgCat.addEventListener('mouseover', () => {
// 	alert('Happy Friday!')
// })

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

imgCat.addEventListener('mouseover', imageHover)