import { CommonModule, Location } from '@angular/common';
import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Input()
  public title!: string;

  @Input() 
  public imageSrc!: string;

  @Input()
  public imageAlt!: string;

  @Input() 
  public imageWidth!: string;

  @Input()
  public imageHeight!: string;

  @Input()
  public buttonBack: boolean = false;

  constructor(private location: Location){}

  public navigateToBack = () => {
    this.location.back();
  }

}
