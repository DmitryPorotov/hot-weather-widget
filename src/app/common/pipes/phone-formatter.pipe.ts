import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatterPipe implements PipeTransform {

  public transform(phone: string, delimiter?: string): string {
    let output: string = '+';
    for (let i: number = 0; i < phone.length; ++i) {
      output += phone[i];
      if (i % 3 === 0 && i !== phone.length - 1) {
        output += delimiter ? delimiter : ' ';
      }
    }
    return output;
  }

}