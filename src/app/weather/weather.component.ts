import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WeatherComponent implements OnInit {

  @Input()
  public weather: Weather;

  @Input()
  public title: string;

  public constructor() { }

  public ngOnInit(): void {
  }

}
