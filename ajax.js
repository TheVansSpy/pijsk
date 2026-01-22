slideIndex = 0;
var slideShow;
var playSlides = true;
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
  slideIndex = 0;
  loop();
  console.log("Startup Complete!"); // Change image every 2 seconds
}

function loop(){
  nextSlide();
  setTimeout(loop, 20000);
}

//Iterates through slides
function nextSlide() {
  if(!playSlides) return;
  console.log("next slide");
  slideIndex ++;
  if(slideIndex == slideArray.length) slideIndex = 0;
  slideShow.setAttribute("src", slideArray[slideIndex]);
  console.log("Current Slide: " + slideIndex + "/" + (slideArray.length - 1));
}
function prevSlide() {
  if(!playSlides) return;
  console.log("prev slide");
  if(slideIndex == 0) slideIndex = slideArray.length - 1;
  else slideIndex--;
  slideShow.setAttribute("src", slideArray[slideIndex]);
  console.log("Current Slide: " + slideIndex + "/" + (slideArray.length - 1));
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
0:'resources/images/02058909 - IMG_Penguin.png',
1:'resources/images/03606992 - IMG_Jax-2.png',
2:'resources/images/03646587 - IMG_Hallie-1.png',
3:'resources/images/06103893 - IMG_Sky-6.png',
4:'resources/images/06288390 - IMG_Sky-9.png',
5:'resources/images/06334506 - IMG_Other-2.png',
6:'resources/images/07746344 - IMG_Sky-8.png',
7:'resources/images/10159045 - IMG_Sky-7.png',
8:'resources/images/10260677 - IMG_Sky-1.png',
9:'resources/images/10767090 - IMG_Buildings-6.png',
10:'resources/images/18065826 - IMG_Buildings-5.png',
11:'resources/images/18286952 - IMG_Other-3.png',
12:'resources/images/26721787 - IMG_Buildings-19.png',
13:'resources/images/28946832 - IMG_Buildings-14.png',
14:'resources/images/30940649 - IMG_Buildings-16.png',
15:'resources/images/34701412 - IMG_Hobbiton-2.png',
16:'resources/images/35110461 - IMG_Other-1.png',
17:'resources/images/40820181 - IMG_Buildings-3.png',
18:'resources/images/41847304 - IMG_Winter-Street.png',
19:'resources/images/43244354 - IMG_Buildings-8.png',
20:'resources/images/47025504 - IMG_Hobbiton-3.png',
21:'resources/images/48643303 - IMG_Seal.png',
22:'resources/images/50554113 - IMG_Buildings-18.png',
23:'resources/images/50786615 - IMG_Uni-3.png',
24:'resources/images/52842746 - IMG_Buildings-17.png',
25:'resources/images/56023705 - IMG_Buildings-4.png',
26:'resources/images/56984398 - IMG_Buildings-10.png',
27:'resources/images/57340152 - IMG_Loki-1.png',
28:'resources/images/57494205 - IMG_Hobbiton-1.png',
29:'resources/images/58001521 - IMG_Buildings-12.png',
30:'resources/images/63722397 - IMG_Hallie-3.png',
31:'resources/images/73567522 - IMG_Buildings-7.png',
32:'resources/images/75408767 - IMG_Uni.png',
33:'resources/images/76205325 - IMG_Jax-4.png',
34:'resources/images/77134437 - IMG_Uni-2.png',
35:'resources/images/77286129 - IMG_Jax-3.png',
36:'resources/images/77801511 - IMG_Buildings-2.png',
37:'resources/images/78318395 - IMG_Buildings-1.png',
38:'resources/images/78587223 - IMG_Jax-1.png',
39:'resources/images/81396278 - IMG_Hedge.png',
40:'resources/images/82113495 - IMG_Buildings-13.png',
41:'resources/images/83863873 - IMG_Hallie-2.png',
42:'resources/images/85192941 - IMG_Sky-5.png',
43:'resources/images/85903794 - IMG_Hallie-4.png',
44:'resources/images/86529232 - IMG_Jax-5.png',
45:'resources/images/89915413 - IMG_Buildings-15.png',
46:'resources/images/90044773 - IMG_Sky-3.png',
47:'resources/images/90210499 - IMG_Sasha.png',
48:'resources/images/91022381 - IMG_Buildings-9.png',
49:'resources/images/94683141 - IMG_Sky-11.png',
50:'resources/images/96009852 - IMG_Sky-2.png',
51:'resources/images/96552290 - IMG_Sky-4.png',
52:'resources/images/97265628 - IMG_Sky-10.png',
53:'resources/images/97666588 - IMG_Buildings-11.png',
length:'54'}
