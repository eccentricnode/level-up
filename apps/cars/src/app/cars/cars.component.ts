import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Manufacturer, CarsService } from '@level/core-data';

@Component({
  selector: 'level-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  form: FormGroup;
  manufacturers$;
  selectedManufacturer: Manufacturer;

  constructor(
    private carsService: CarsService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.getManufacturers();
    this.initForm();
    this.resetManufacturer();
  }

  selectManufacturer(manufacturer) {
    this.selectedManufacturer = manufacturer;
  }

  getManufacturers() {
    this.manufacturers$ = this.carsService.all();
  }

  resetManufacturer() {
    this.form.reset();
    this.selectManufacturer({id: null});
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: null,
      Country: { value: '', disabled: true },
      Mfr_Name: { value: '', disabled: true },
    });
  }
}
