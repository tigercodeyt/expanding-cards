const slider=document.querySelectorAll('.slide')

slider.forEach(slide =>{
	slide.addEventListener('click',() =>{
		removeActiveClasses()
		slide.classList.add('active')
	})
})
function removeActiveClasses(){
	slider.forEach(slide =>{
		slide.classList.remove('active')
	})
}