import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {
  apiKey = '54e72a1e2ba54aa785b185348170209';
  url;

  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.apixu.com/v1/current.json?key='+this.apiKey+'&q';
  }

  getWeather(city){
    return this.http.get(this.url+'='+city)
      .map(res => res.json());
  }

}
