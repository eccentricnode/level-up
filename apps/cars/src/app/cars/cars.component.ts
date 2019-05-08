import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Manufacturer, CarsService, ManufacturersFacade } from '@level/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'level-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  form: FormGroup;
  manufacturers$: Observable<Manufacturer[]> = this.manufacturersFacade.allManufacturers$;
  selectedManufacturer$: Observable<Manufacturer> = this.manufacturersFacade.selectedManufacturers$;

  constructor(
    private carsService: CarsService,
    private manufacturersFacade: ManufacturersFacade,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.manufacturersFacade.loadAManufacturers();
    this.initForm();
    this.resetManufacturer();
  }

  selectManufacturer(manufacturer) {
    this.manufacturersFacade.selectManufacturer(manufacturer);
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
