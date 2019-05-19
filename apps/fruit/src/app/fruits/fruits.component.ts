import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Fruit, FruitsFacade } from '@level/core-data';

@Component({
  selector: 'level-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss']
})
export class FruitsComponent implements OnInit {
  form: FormGroup;
  fruits$: Observable<Fruit[]> = this.fruitsFacade.allFruits$;
  selectedFruit: Observable<Fruit> = this.fruitsFacade.selectedFruit$;

  constructor(
    private fruitsFacade: FruitsFacade,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.fruitsFacade.loadFruits();
    this.initForm();
    this.reset();
  }

  selectFruit(fruit) {
    this.selectedFruit = fruit;
  }

  saveFruit(fruit:Fruit) {
    fruit.id ? this.fruitsFacade.updateFruit(fruit) : this.fruitsFacade.addFruit(fruit);
  }

  removeFruit(fruit: Fruit) {
    this.fruitsFacade.deleteFruit(fruit);
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
