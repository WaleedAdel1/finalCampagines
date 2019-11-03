import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Shared/product';
import { Currency } from 'src/app/Shared/currency';
import { CurrencyService } from 'src/app/Services/currency.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  product: Product;
  languageWord = false;
  currency: Currency[];
  selectedCurrency: number;
  message: number;
   constructor(private currencyService: CurrencyService) {}


  changeDirection() {
    this.languageWord = ! this.languageWord;
  }


ngOnInit() {
  this.currencyService.currentCurrencyValue.subscribe(message => this.message = message);
  this.currencyService.getAllCurrency().subscribe(data => this.currency = data);
  this.selectedCurrency = 1;
}


  changeCurrency() {
    this.currencyService.changeValue(this.selectedCurrency);
  }
}
