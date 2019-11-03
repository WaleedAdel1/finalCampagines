import { Currency } from 'src/app/Shared/currency';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {


 constructor(private http: HttpClient) {  }

 private CurrencySource = new BehaviorSubject(1);

 currentCurrencyValue = this.CurrencySource.asObservable();

  changeValue(value: number) {
    this.CurrencySource.next(value);
  }

  getAllCurrency(): Observable<Currency[]> {
    return this.http.get<Currency[]>('http://localhost:3000/currency');
  }

}
