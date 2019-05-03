import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Coin } from '@level/core-data';

@Component({
  selector: 'level-crypto-details',
  templateUrl: './crypto-details.component.html',
  styleUrls: ['./crypto-details.component.scss']
})
export class CryptoDetailsComponent {
  @Input() detailsGroup: FormGroup;
  @Output() reset = new EventEmitter();

  @Input() set selectedCoin(value: Coin) {
    if(!value) return;
    this.detailsGroup.patchValue({
      id: null,
      name: value.name,
      rank: value.rank,
      price_usd: value.price_usd,
      percent_change_24h: value.percent_change_24h,
      percent_change_7d: value.percent_change_7d,
    });
  }

  resetForm() {
    this.reset.emit();
  }
}
