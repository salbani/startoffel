import { Component, OnInit, Input } from '@angular/core';
import { Salad } from '../../interfaces/salad.interface';

@Component({
  selector: 'stfl-salad',
  templateUrl: './salad.component.html',
  styleUrls: ['./salad.component.scss']
})
export class SaladComponent implements OnInit {

  @Input()
  salad: Salad;

  constructor() { }

  ngOnInit() {
  }

  get rating(){
    let sum = 0;
    for (const userRating of this.salad.userRatings) {
      let userSum = 0;
      for (const rating of userRating.ratings) {
        userSum += rating.rating;
      }
      sum += userSum / userRating.ratings.length;
    }
    return Math.round(sum / this.salad.userRatings.length);
  }

  get image() {
    return this.salad.image || 'https://www.valdemarsro.dk/wp-content/2011/04/kartoffelsalat.jpg';
  }

  get date(){
    let d = new Date(this.salad.date);
    return `${d.getDay()}.${d.getMonth()}.${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`
  }

}
