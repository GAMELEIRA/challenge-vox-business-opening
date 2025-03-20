import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input()
  public title!: string;

  @Input() 
  public image!: string;

  @Input()
  public alt!: string;

  @Input() 
  public width!: string;

  @Input()
  public height!: string;

}
