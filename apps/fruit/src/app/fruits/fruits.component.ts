import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Fruit, FruitsService } from '@level/core-data';

@Component({
  selector: 'level-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss']
})
export class FruitsComponent implements OnInit {
  form: FormGroup;
  fruits$: Observable<Fruit[]>
  selectedFruit: Fruit;

  constructor(
    private fruitsService: FruitsService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.getFruits();
    this.initForm();
    this.reset();
  }

  getFruits() {
    this.fruits$ = this.fruitsService.all();
  }

  selectFruit(fruit) {
    this.selectedFruit = fruit;
  }

  saveFruit(fruit:Fruit) {
    fruit.id ? this.updateFruit(fruit) : this.createFruit(fruit);
  }

  createFruit(fruit: Fruit) {
    this.fruitsService.create(fruit)
      .subscribe((res: Fruit) => {
        this.reset();
        this.getFruits();
      });
  }

  updateFruit(fruit: Fruit) {
    this.fruitsService.update(fruit)
      .subscribe((res: Fruit) => {
        this.reset();
        this.getFruits();
      });
  }

  removeFruit(fruit: Fruit) {
    this.fruitsService.delete(fruit)
      .subscribe((res: Fruit) => {
        this.reset();
        this.getFruits();
      });
  }

  reset() {
    this.form.reset();
    this.selectFruit({id: null});
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: null,
      name: ['', Validators.compose([Validators.required])],
      calories: ['', Validators.compose([Validators.required])],
      carbohydrates: ['', Validators.compose([Validators.required])],
      sugar: ['', Validators.compose([Validators.required])],
    });
  }
}
