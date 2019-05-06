import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Air, AirService, CitiesFacade } from '@level/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'level-air',
  templateUrl: './air.component.html',
  styleUrls: ['./air.component.scss']
})
export class AirComponent implements OnInit {
  form: FormGroup;
  cities$: Observable<Air[]> = this.citiesFacade.allCities$;
  selectedCity$: Observable<Air> = this.citiesFacade.selectedCities$;

  constructor(
    private airService: AirService,
    private citiesFacade: CitiesFacade,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.citiesFacade.loadCities();
    this.initForm();
    this.resetCity();
  }

  selectCity(city) {
    console.log(this.selectedCity$);
    this.citiesFacade.selectCity(city);
  }

  resetCity() {
    this.selectCity({id: null});
    this.form.reset();
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: null,
      city: {value: '', disabled: true},
      country: {value: '', disabled: true},
      locations: {value: null, disabled: true},
      count: {value: null, disabled: true}
    });
  }
}