import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result:any;

  constructor(private _http: HttpClient) {}

  getPrices() {
    return this._http.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,IOT,XRP,XVG,TRX,LRC,DASH,BCH,NEBL&tsyms=USD,EUR,BTC")
      .map(result => this.result = result);
  }

}
