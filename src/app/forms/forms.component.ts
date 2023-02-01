import { Component, EventEmitter, Output } from '@angular/core';

import { Quotation } from '../models/quotation';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  @Output() newQuotation = new EventEmitter<Quotation>();

  showForm = false;

  quotation: Quotation = { author: '', sentence: '', votes: 0 };

  onSwitchForm(): void {
    this.showForm = !this.showForm;
  }

  addQuotation() {
    this.newQuotation.emit(this.quotation);
    this.quotation = { author: '', sentence: '', votes: 0 };
  }
}

