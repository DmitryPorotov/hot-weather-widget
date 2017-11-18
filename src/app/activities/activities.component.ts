import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { activities$ } from '../services/mock_data_srv';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ActivitiesComponent implements OnInit {

  public activities$: Observable<Activity[]>;

  public constructor() { }

  public ngOnInit(): void {
    this.activities$ = activities$;
  }

}
