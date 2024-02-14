import { Component } from '@angular/core';
import { CustomerapiService } from '../customerapi.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weatherforecast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weatherforecast.component.html',
})
export class WeatherforecastComponent {
  weatherforecastList!: any[];
  constructor(private customerApi: CustomerapiService) {
    customerApi.getWeatherforecast()
      .subscribe(p => {
        this.weatherforecastList = p;
        console.log(this.weatherforecastList);
      });
  }

}
