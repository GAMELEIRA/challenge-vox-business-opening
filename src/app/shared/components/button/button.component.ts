import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input()
  public label?: string;

  @Output()
  public action = new EventEmitter<string>();

  @Input() 
  type: 'primary' | 'secondary' = 'primary';

  public requestAction(): void{
    this.action.emit();
  }

  get buttonClass() {
    return this.type === 'primary'
      ? 'bg-blue-600 text-white hover:bg-blue-700'
      : 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-100';
  }
}