import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { Coin, CoinService, CoinsFacade } from '@level/core-data';

@Component({
  selector: 'level-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss']
})
export class CryptoComponent implements OnInit {
  form: FormGroup;
  coins$: Observable<Coin[]> = this.coinsFacade.allCoins$;
  selectedCoin$: Observable<Coin> = this.coinsFacade.selectedCoins$;

  constructor(
    private coinService: CoinService,
    private coinsFacade: CoinsFacade,
    private formBuilder: FormBuilder  
  ) { }
  
  ngOnInit() {
    this.coinsFacade.loadCoins();
    this.initForm();
    this.resetForm();
  }

  selectCoin(coin) {
    this.coinsFacade.selectCoin(coin);
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
