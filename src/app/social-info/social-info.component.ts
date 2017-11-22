import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-social-info',
  templateUrl: './social-info.component.html',
  styleUrls: ['./social-info.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SocialInfoComponent {

  @Input()
  public socInfo: SocialInfo;

  @Input()
  public title: string;

  public constructor() { }

}
