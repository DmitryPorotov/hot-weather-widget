import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { socInfo$ } from '../services/mock_data_srv';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-social-info',
  templateUrl: './social-info.component.html',
  styleUrls: ['./social-info.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SocialInfoComponent implements OnInit {

  public socInfo$: Observable<SocialInfo>;

  public constructor() { }

  public ngOnInit(): void {
    this.socInfo$ = socInfo$;
  }

}
