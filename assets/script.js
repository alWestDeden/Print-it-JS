const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// define the variable used for slide's position
var navPosition = 0

// listen to left arrow nav
const arrow_left = document.querySelector(".arrow_left")
arrow_left.addEventListener("click", () => {
	// decrement navPosition variable
	navPosition--
	// loop navigation when at left
	if (navPosition === -1) {
		navPosition = (slides.length -1)
	}
	genererImage(navPosition)
	console.log("Click sur la flêche gauche")
})

// listen to right arrow
const arrow_right = document.querySelector(".arrow_right")
arrow_right.addEventListener("click", () => {
	// increment navPosition variable
	navPosition++
	// loop navigation when at right
	if (navPosition === slides.length) {
		navPosition = 0
	}
	genererImage(navPosition)
	console.log("Click sur la flêche droite")
})

// create div(s) for the dots
for (let i = 0; i < slides.length; i++) {
	// select the div with "dots" class
	const dots = document.querySelector(".dots")
	// create a div
	let dot =document.createElement("div")
	// give the div two class name. "dot--nb" class help define the actual dot
	dot.className = "dot dot--" + i
	// on first load the first dot is selected
	if (i === 0) {
		dot.classList.add("dot_selected")
	}
	// insert the new code in is Parent
	dots.appendChild(dot)
}

// navigation function
function genererImage(navPosition) {
	// select the image and text from the banner
	const baliseImage = document.querySelector(".banner-img")
	const baliseP = document.querySelector("#banner p")
	// reset the image and text from banner
	baliseImage.src = ""
	baliseP.innerText = ""
	// reset the previous selected dot
	let selectedDot = document.querySelector(".dot_selected")
	selectedDot.classList.remove("dot_selected")
	// create the new selected dot
	const actualDot = document.querySelector(".dot--" + navPosition)
	actualDot.classList.add("dot_selected")
	// create the link to the new banner
	baliseImage.src = `./assets/images/slideshow/` + slides[navPosition].image
	// create the link to the new banner's text
	baliseP.innerHTML = slides[navPosition].tagLine
}