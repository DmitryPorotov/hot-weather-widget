import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterResorts'
})
export class ResortFilterPipe implements PipeTransform {

  public transform(activities: Activity[], term: string): Activity[] {

    if (!term) {
      return activities;
    }

    return activities.filter((a: Activity) => a.types.indexOf(term) >= 0 );
  }

}