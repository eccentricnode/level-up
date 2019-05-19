import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Fruit } from '@level/core-data';

@Component({
  selector: 'level-fruits-details',
  templateUrl: './fruits-details.component.html',
  styleUrls: ['./fruits-details.component.scss']
})
export class FruitsDetailsComponent {
  currentFruit: Fruit;
  @Input() group: FormGroup;
  @Output() submitted = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set selectedFruit(value: Fruit) {
    this.currentFruit = value;
    if(!value) return;
    this.group.patchValue({
      id: value.id,
      name: value.name,
      calories: value.calories,
      carbohydrates: value.carbohydrates,
      sugar: value.sugar,
    });
  }

  submit(directive: NgForm) {
    if (this.group.valid) {
      this.submitted.emit(this.group.value);
      directive.resetForm();
    }
  }

  cancel() {
    this.cancelled.emit();
  }

  validateForm(control: string, directive: NgForm) {
    return this.group.get(control).invalid && directive.submitted;
  }

  determineUpdate() {
    return !!this.group.value;
  }
}
