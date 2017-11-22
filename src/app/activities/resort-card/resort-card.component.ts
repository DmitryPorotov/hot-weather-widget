import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-resort-card',
  templateUrl: './resort-card.component.html',
  styleUrls: ['./resort-card.component.css']
})
export class ResortCardComponent implements OnInit {

  @Input()
  public activity: Activity;

  public constructor() { }

  public ngOnInit(): void {
  }

}
