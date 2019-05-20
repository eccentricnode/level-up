import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Instrument, InstrumentsService } from '@level/core-data';

@Component({
  selector: 'level-instruments',
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.component.scss']
})
export class InstrumentsComponent implements OnInit {
  form: FormGroup;
  instruments$: Observable<Instrument[]>;
  selectedInstrument;

  constructor(
    private instrumentsService: InstrumentsService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
  }

  getInstruments() {
    this.instruments$ = this.instrumentsService.all();
  }

  selectInstrument(instrument) {
    this.selectInstrument = instrument;
  }

  saveInstrumnent(instrument: Instrument) {

  }

  createInstrument(instrument: Instrument) {
    this.instrumentsService.create(instrument)
      .subscribe((res: Instrument) => {
        this.reset();
        this.getInstruments();
      });
  }

  updateInstrument(instrument: Instrument) {
    this.instrumentsService.update(instrument)
      .subscribe((res: Instrument) => {
        this.reset();
        this.getInstruments();
      });
  }

  removeInstrument(instrument: string) {
    this.instrumentsService.delete(instrument)
      .subscribe(res => {
        this.reset();
        this.getInstruments();
      })
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
