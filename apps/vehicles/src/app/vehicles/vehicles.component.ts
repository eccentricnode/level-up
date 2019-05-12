import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { Vehicle, VehiclesService, VehiclesFacade } from '@level/core-data';

@Component({
  selector: 'level-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {
  form: FormGroup;
  vehicles$: Observable<Vehicle[]> = this.vehiclesFacade.allVehicles$;
  selectedVehicle$: Observable<Vehicle> = this.vehiclesFacade.selectedVehicles$;

  constructor(
    private vehiclesService: VehiclesService,
    private vehiclesFacade: VehiclesFacade,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.vehiclesFacade.loadVehicles();
    this.initForm();
    this.resetVehicle();
  }

  selectVehicle(vehicle) {
    this.vehiclesFacade.selectVehicle(vehicle);
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
