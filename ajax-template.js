//Global Variables
slideIndex = 0;
var slideShow;
//Trigger: Key down
document.addEventListener("keydown", keyDown);

//Trigger: On load
function showSlides() {
  //new code
  slideShow = document.createElement("img");
  slideShow.className = "slide-img";
  slideShow.setAttribute("src", slideArray[slideIndex]);
  document.body.append(slideShow);
  //make the three slides on the page.
  slideIndex = 1;
  setTimeout(nextSlide, 20000); // Change image every 2 seconds
}

//Iterates through slides
function nextSlide() {
  console.log("next slide");
  slideIndex ++;
  slideShow.setAttribute("src", slideArray[slideIndex]);
  if(slideIndex > slideArray.length) slideIndex = 0;
  console.log("Current Slide: " + slideIndex + "/" + slideArray.length - 1);
}
function prevSlide() {
  console.log("prev slide");
  if(slideIndex == 0) slideIndex = slideArray.length - 1;
  else slideIndex--;
  slideShow.setAttribute("src", slideArray[slideIndex]);
  console.log("Current Slide: " + slideIndex + "/" + slideArray.length - 1);
}

//e is the key that was pressed (i.e. KeyA)
function keyDown(e) {
  console.log("User has pressed: " + e.code);
  if(e.code == "KeyP") playSlides = !playSlides; //pause/unpause slideshow
  if(e.code == "ArrowRight") nextSlide();
  if(e.code == "ArrowLeft") prevSlide();
}

//BuildSlides builds an object literal containing all of the slides here.
var slideArray = {
  
}