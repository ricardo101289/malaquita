import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images-referent',
  templateUrl: './images-referent.component.html',
  styleUrls: ['./images-referent.component.scss']
})
export class ImagesReferentComponent implements OnInit {
  images = [
    "../../../assets/png/red/INGRESO.png",
    "../../../assets/png/ref/CASAGR.png",
    "../../../assets/png/ref/VALLA.png"
  ]

  constructor() { }

slideIndex = 1;

ngOnInit(): void {
  this.showSlides(this.slideIndex);
}

plusSlides(n) {
  this.showSlides(this.slideIndex += n);
}

currentSlide(n) {
  this.showSlides(this.slideIndex = n);
}

showSlides(n) {
  let i;
  let slides: any = document.getElementsByClassName("mySlidesRef");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {this.slideIndex = 1}    
  if (n < 1) {this.slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[this.slideIndex-1].style.display = "block";  
  dots[this.slideIndex-1].className += " active";
}

}


