import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from '@level/core-data';

@Component({
  selector: 'level-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.scss']
})
export class AnimalsListComponent {
  @Input() animals: Animal[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  select(animal: Animal) {
    this.selected.emit(animal);
  }

  remove(animal: string) {
    this.deleted.emit(animal);
  }
}
