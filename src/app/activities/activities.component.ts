import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { activities$ } from '../mock_data/mock_data_srv';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ActivitiesComponent implements OnInit {

  public activities$: Observable<Activity[]>;

  public term: string;

  @Output()
  public onResortSelected: EventEmitter<Activity> = new EventEmitter;

  public constructor() { }

  public ngOnInit(): void {
    this.activities$ = activities$;
  }

  public selectResort(resort: Activity): void {
    this.onResortSelected.emit(resort);
  }

}
