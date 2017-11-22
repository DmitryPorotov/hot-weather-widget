import { Observable } from 'rxjs/Observable';
// import { delay } from 'rxjs/operators';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

const activities: Activity[] = [
  {
    img1: 'res.jpg',
    img2: 'r1.jpg',
    address: 'Sed perspiciatis Et harum quidem',
    phone: '1285968672',
    types: ['hotel', 'fishing'],
    title: 'Some hotel',
    weather: {
      icon: 'cloud',
      water_temperature: 10,
      air_temperature: 13
    },
    socInfo: {
      followers: 123,
      following: 12,
      img: 'b1.jpg'
    }
  },
  {
    img1: 'res.jpg',
    img2: 'r1.jpg',
    address: 'Sed perspiciatis Et harum quidem',
    phone: '1285698684',
    types: ['hotel', 'tour'],
    title: 'Some hotel 2',
    weather: {
      icon: 'cloud',
      water_temperature: 25,
      air_temperature: 27
    },
    socInfo: {
      followers: 45632,
      following: 4,
      img: 'b1.jpg'
    }
  },
  {
    img1: 'res.jpg',
    img2: 'r1.jpg',
    address: 'Sed perspiciatis Et harum quidem',
    phone: '1386347685',
    types: ['fishing'],
    title: 'Some hotel 3',
    weather: {
      icon: 'cloud',
      water_temperature: 29,
      air_temperature: 30
    },
    socInfo: {
      followers: 2850,
      following: 675,
      img: 'b1.jpg'
    }
  },
  {
    img1: 'res.jpg',
    img2: 'r1.jpg',
    address: 'Sed perspiciatis Et harum quidem',
    phone: '1386347685',
    types: ['fishing'],
    title: 'Some hotel 4',
    weather: {
      icon: 'cloud',
      water_temperature: 0,
      air_temperature: -2
    },
    socInfo: {
      followers: 110,
      following: 5,
      img: 'b1.jpg'
    }
  }
];


export const activities$: Observable<Activity[]> =
    Observable.of(activities)
        .delay(2000);