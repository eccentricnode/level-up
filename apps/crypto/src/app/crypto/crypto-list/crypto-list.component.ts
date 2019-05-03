import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Coin } from '@level/core-data';

@Component({
  selector: 'level-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.scss']
})
export class CryptoListComponent {
  @Input() coins: Coin;
  @Output() selected = new EventEmitter();

  selectCoinSubmit(coin) {
    this.selected.emit(coin);
  }
}
