import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Instrument } from '@level/core-data';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'level-instruments-details',
  templateUrl: './instruments-details.component.html',
  styleUrls: ['./instruments-details.component.scss']
})
export class InstrumentsDetailsComponent {
 currentInstrument: Instrument;
 @Input() group: FormGroup;
 @Output() submitted = new EventEmitter();
 @Output() cancelled = new EventEmitter();

 @Input() set selectedInstrument(value: Instrument) {
   this.currentInstrument = value;
   if(!value) return;
   this.group.patchValue({
     id: value.id,
     name: value.name,
     year: value.year,
     inventor: value.inventor,
     country: value.country,
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
   return !!this.group.value.id;
 }
}
