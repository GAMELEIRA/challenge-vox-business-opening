import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from "../button/button.component";
import { Card } from '../../models/Card.model';
import { CardSection } from '../../models/CardSection';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate/translate.pipe';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent, TranslatePipe],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  @Input()
  title?: string | number;

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

  @Output()
  saveAction = new EventEmitter<Record<string, any>>();

  protected sections: CardSection[] = [];

  public idFields: number = 0

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
          title: key,
          items: this.flattenObject(value)
        });
      } else {
        let generalSection = sections.find(sec => sec.title === 'Geral');
        if (!generalSection) {
          generalSection = { title: 'Geral', items: [] };
          sections.push(generalSection);
        }
        generalSection.items.push({ label: key, description: String(value) });
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
        cards.push({ label: key, description: String(value) });
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

  public onSaveClick() {
    this.saveAction.emit(this.dataObject);
  }

  public filteredSections() {
    return this.sections.filter(section => {
      if (section.title === 'Geral') {
        return section.items.some(item => item.label !== 'id');
      }
      return true;
    });
  }

  public getInputType(item: any): string {
    if (typeof item.description === 'number') {
      return 'number';
    }
    if (typeof item.description === 'boolean') {
      return 'checkbox';
    }
    if (typeof item.description === 'string') {
      if (this.isEmail(item.description)) {
        return 'email';
      }
      if (this.isDate(item.description)) {
        return 'date';
      }
      return 'text';
    }
    return 'text';
  }


  private isEmail(value: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  private isDate(value: string): boolean {
    return /^\d{4}-\d{2}-\d{2}$/.test(value);
  }
  public updateDataObject(label: string, event: any) {
    if (!this.dataObject) return;
  
    const value = event.target.value;
  
    const updateNestedProperty = (obj: any, key: string, newValue: any): boolean => {
      for (const prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          if (prop === key) {
            obj[prop] = newValue;
            return true;
          } else if (typeof obj[prop] === 'object' && obj[prop] !== null) {
            const updated = updateNestedProperty(obj[prop], key, newValue);
            if (updated) return true;
          }
        }
      }
      return false;
    };
  
    updateNestedProperty(this.dataObject, label, value);
  }
  
}