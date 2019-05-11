import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Vehicle, VehiclesService } from '@level/core-data';

@Component({
  selector: 'level-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {
  form: FormGroup;
  vehicles$;
  selectedVehicle: Vehicle;

  constructor(
    private vehiclesService: VehiclesService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.getVehicles();
    this.initForm();
    this.resetVehicle();
  }

  getVehicles() {
    this.vehicles$ = this.vehiclesService.all();
  }

  selectVehicle(vehicle) {
    this.selectedVehicle = vehicle;
  }

  resetVehicle() {
    this.form.reset();
    this.selectVehicle({id: null});
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: null,
      name: { value: '', disabled: true },
      manufacturer: { value: '', disabled: true },
      vehicle_class: { value: '', disabled: true },
      crew: { value: '', disabled: true },
      passengers: { value: '', disabled: true },
    });
  }
}
