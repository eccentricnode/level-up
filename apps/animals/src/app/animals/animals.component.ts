import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AnimalsService, Animal, NotifyService } from '@level/core-data';

@Component({
  selector: 'level-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {
  form: FormGroup;
  animals$: Observable<Animal[]>;
  selectedAnimal: Animal;

  constructor(
    private animalsService: AnimalsService,
    private notifyService: NotifyService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.getAnimals();
    this.initForm();
  }

  getAnimals() {
    this.animals$ = this.animalsService.all();
  }

  selectAnimal(animal: Animal) {
    this.selectedAnimal = animal;
    this.form.patchValue(animal);
  }

  saveAnimal(animal: Animal) {
    animal.id ? this.updateAnimal(animal) : this.createAnimal(animal);
  }

  createAnimal(animal: Animal) {
    this.animalsService.create(animal)
      .subscribe((res: Animal) => {
        const message = `{res.name} has been Created!`;

        this.reset();
        this.getAnimals();
        this.notifyService.notify(message, 'Awesome!');
      }) 
  }

  updateAnimal(animal: Animal) {
    this.animalsService.update(animal)
      .subscribe((res: Animal) => {
        const message = `${res.name} has been updated!`;

        this.reset();
        this.getAnimals();
        this.notifyService.notify(message, 'Nice!');
      }) ;
  }

  removeAnimal(animalId: string) {
    this.animalsService.delete(animalId)
      .subscribe(res => {
        this.reset();
        this.getAnimals();
        this.notifyService.notify('Contact removed...');
      })
  }

  reset() {
    this.form.reset();
    this.selectedAnimal = {} as any;
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: null, 
      name: ['', Validators.compose([Validators.required])],
      height: ['', Validators.compose([Validators.required])],
      mass: ['', Validators.compose([Validators.required])],
      continent: ['', Validators.compose([Validators.required])],
    });
  }
}
