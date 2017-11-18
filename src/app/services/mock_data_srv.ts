import { Observable } from 'rxjs/Observable';
// import { delay } from 'rxjs/operators';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

const activities: Activity[] = [
  {
    img1: 'res.jpg',
    img2: 'r1.jpg',
    address: 'Sed perspiciatis Et harum quidem',
    phone: '1285968672'
  },
  {
    img1: 'res.jpg',
    img2: 'r1.jpg',
    address: 'Sed perspiciatis Et harum quidem',
    phone: '1285698684'
  },
  {
    img1: 'res.jpg',
    img2: 'r1.jpg',
    address: 'Sed perspiciatis Et harum quidem',
    phone: '1386347685'
  }
];

const weather: Weather = {
  title: 'Et harum quidem',
  icon: 'cloud',
  water_temperature: 20,
  air_temperature: 14
};

const socInfo: SocialInfo = {
  followers: 2850,
  following: 675,
  title: 'Et harum quidem',
  img: 'b1.jpg'
};

export const activities$: Observable<Activity[]> =
    Observable.of(activities)
        .delay(2000);

export const weather$: Observable<Weather> =
    Observable.of(weather)
        .delay(2000);

export const socInfo$: Observable<SocialInfo> =
    Observable.of(socInfo)
        .delay(2000);