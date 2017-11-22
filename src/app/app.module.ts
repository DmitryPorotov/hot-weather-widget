import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ActivitiesComponent } from './activities/activities.component';
import { WeatherComponent } from './weather/weather.component';
import { SocialInfoComponent } from './social-info/social-info.component';
import { PhoneFormatterPipe } from './common/pipes/phone-formatter.pipe';
import { ResortCardComponent } from './activities/resort-card/resort-card.component';
import { ResortFilterPipe } from './common/pipes/resort-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ActivitiesComponent,
    PhoneFormatterPipe,
    WeatherComponent,
    SocialInfoComponent,
    ResortCardComponent,
    ResortFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
