import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Air, AirService } from '@level/core-data';

@Component({
  selector: 'level-air',
  templateUrl: './air.component.html',
  styleUrls: ['./air.component.scss']
})
export class AirComponent implements OnInit {
  form: FormGroup;
  cities$;
  selectedCity: Air;

  constructor(
    private airService: AirService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.getCities();
    this.initForm();
    this.resetCity();
  }

  selectCity(city) {
    this.selectedCity = city;
  }

  getCities() {
    this.cities$ = this.airService.getAirData()
  }

  resetCity() {
    const emptyCity: Air = {
      id: null,
      city: '',
      country: '',
      locations: null,
      count: null
    }
    this.selectCity(emptyCity);
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: null,
      city: {value: '', disabled: true},
      country: {value: '', disabled: true},
      location: {value: null, disabled: true},
      count: {value: null, disabled: true}
    });
  }
}