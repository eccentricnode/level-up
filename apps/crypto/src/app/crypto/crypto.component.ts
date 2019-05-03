import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Coin, CoinService } from '@level/core-data';

@Component({
  selector: 'level-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss']
})
export class CryptoComponent implements OnInit {
  form: FormGroup;
  coins$;
  selectedCoin: Coin;

  constructor(
    private coinService: CoinService,
    private formBuilder: FormBuilder  
  ) { }
  
  ngOnInit() {
    this.getCoins();
    this.initForm();
    this.resetForm();
  }

  getCoins() {
    this.coins$ = this.coinService.all();
  }

  selectCoin(coin) {
    this.selectedCoin = coin;
  }

  resetForm() {
    this.selectCoin({id: null});
    this.form.reset();
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: null,
      name:  { value: '', disabled: true },
      rank:  { value: null, disabled: true },
      price_usd:  { value: '', disabled: true },
      percent_change_24h:  { value: '', disabled: true },
      percent_change_7d:  { value: '', disabled: true },
    });
  }
}
