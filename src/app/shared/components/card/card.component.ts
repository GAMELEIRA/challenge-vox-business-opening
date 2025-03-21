import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from './models/Card.model';
import { CardSection } from './models/CardSection';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {

  @Input()
  title!: string | number;

  @Input()
  description?: string;

  @Input()
  dataObject?: Record<string, any>;

  @Input()
  primaryLabelButton?: string;

  @Input()
  secondLabelButton?: string;

  @Output()
  primaryAction = new EventEmitter<void>();
  
  @Output()
  secondaryAction = new EventEmitter<void>();

  protected sections: CardSection[] = [];

  ngOnInit() {
    if (this.dataObject) {
      this.sections = this.groupObject(this.dataObject);
    }
  }

  private groupObject(obj: any): CardSection[] {
    let sections: CardSection[] = [];

    Object.entries(obj).forEach(([key, value]) => {
      if (typeof value === 'object' && value !== null) {
        sections.push({
          title: this.formatTitle(key),
          items: this.flattenObject(value)
        });
      } else {
        let generalSection = sections.find(sec => sec.title === 'Geral');
        if (!generalSection) {
          generalSection = { items: [] };
          sections.push(generalSection);
        }
        generalSection.items.push({ label: this.formatTitle(key), description: String(value) });
      }
    });

    return sections;
  }

  private flattenObject(obj: any): Card[] {
    let cards: Card[] = [];

    Object.entries(obj).forEach(([key, value]) => {
      if (typeof value === 'object' && value !== null) {
        cards = [...cards, ...this.flattenObject(value)];
      } else {
        cards.push({ label: this.formatTitle(key), description: String(value) });
      }
    });

    return cards;
  }

  private formatTitle(text: string): string {
    return text.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
  }

  public onPrimaryClick() {
    this.primaryAction.emit();
  }

  public onSecondaryClick() {
    this.secondaryAction.emit();
  }
}
