const colorButton = document.querySelector('#color');
const placeButton = document.querySelector('#place');
const ritualButton = document.querySelector('#ritual');
const selectCorrect = document.querySelector('#studyAbroadForm')

const colorClick = () => {
    alert("My favorite color is blue")
}

const placeClick = () => {
    alert("My favorite place is the ocean")
}

const ritualClick = () => {
    alert("My favorite ritual is meditating in the sauna")
}

const selectCorrectClick = (event) => {
    event.preventDefault()
    
    alert('Italy')
}

colorButton.addEventListener('click', colorClick)
placeButton.addEventListener('click', placeClick)
ritualButton.addEventListener('click', ritualClick)
selectCorrect.addEventListener('click', selectCorrectClick)