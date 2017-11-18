import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { weather$ } from '../services/mock_data_srv';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WeatherComponent implements OnInit {

  public weather$: Observable<Weather>;

  public constructor() { }

  public ngOnInit(): void {
    this.weather$ = weather$;
  }

}
