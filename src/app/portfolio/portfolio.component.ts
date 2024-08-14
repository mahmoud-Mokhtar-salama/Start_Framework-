import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { log } from 'console';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [FooterComponent ,NgIf],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  isClick: boolean = false;
  imgSrc: string = "";

  open(mainImage: string) {
    this.isClick = true;
    this.imgSrc = `./assets/imge/${mainImage}`;
  }

  close() {
    this.isClick = false;
  }
}