import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }
  imageSources = [
                  '../../../../assets/images/bannerSlider.png',
                  '../../../../assets/images/bannerSlider.png',
                  '../../../../assets/images/bannerSlider.png'
                ];
  height = '100%';
  minHeight = '250px';
  dotColor = '#FFF';
  backgroundSize = 'cover';
  ngOnInit() {
  }

}
