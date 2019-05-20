import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Instrument, InstrumentsFacade } from '@level/core-data';

@Component({
  selector: 'level-instruments',
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.component.scss']
})
export class InstrumentsComponent implements OnInit {
  form: FormGroup;
  instruments$: Observable<Instrument[]> = this.instrumentsFacade.allInstruments$;
  selectedInstrument$: Observable<Instrument> = this.instrumentsFacade.selectedInstrument$;

  constructor(
    private instrumentsFacade: InstrumentsFacade,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.instrumentsFacade.loadInstruments();
    this.initForm();
    this.instrumentsFacade.mutations$.subscribe(_ => this.reset());
    this.reset();
  }

  selectInstrument(instrument) {
    this.instrumentsFacade.selectInstrument(instrument);
  }

  saveInstrumnent(instrument: Instrument) {
    instrument.id ? this.instrumentsFacade.updateInstrument(instrument) : this.instrumentsFacade.addInstrument(instrument);
  }


  removeInstrument(instrument) {
    this.instrumentsFacade.deleteInstrument(instrument);
  }

  reset() {
    this.form.reset();
    this.selectInstrument({id: null});
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: null, 
      name: ['', Validators.compose([Validators.required])],
      year: ['', Validators.compose([Validators.required])],
      inventor: ['', Validators.compose([Validators.required])],
      country: ['', Validators.compose([Validators.required])],
    });
  }
}
