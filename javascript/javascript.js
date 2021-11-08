var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  //dots[slideIndex-1].className += " active";
}


function comprar(){
var modal = document.getElementById("modalLightBox");
var mario = document.querySelectorAll("#img");
var btn = document.querySelectorAll("#btn");
var nItens = document.querySelector("#quantidadeItens");
nItens.textContent = 0;
var numItens = nItens.textContent;
var span = document.getElementsByClassName("close")[0];
btn.forEach(x => {
  x.addEventListener('click', () => x.style.background = "#084154")
  //mario.style.display = "block";
  modal.style.display = "block";
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  x.addEventListener('click', () => x.innerHTML = 'COMPRADO!')
  //Adicionando um item no carrinho
  if(!this.clicked){
    numItens++;
    nItens.textContent = numItens;
    var produto = this.parentElement;
  }
});
console.log(btn);
}

