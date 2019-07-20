import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Rating } from '../../interfaces/rating.interface';

const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RatingComponent),
    multi: true
};

@Component({
  selector: 'stfl-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class RatingComponent implements OnInit {

  @Input()
  rating: Rating = Rating.OneStar;

  @Input()
  mutable = true;

  get ratings() {
    let ratings = [];
    for (const key in Rating) {
      if (typeof Rating[key] == 'number')
        ratings.push(key);
    }
    return ratings;
  }

  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  constructor() { }

  ngOnInit() {
  }

  isActive(rating: string){
    return this.rating >= Rating[rating];
  }

  setRating(rating: string){
    if(!this.mutable) return;
    this.rating = Rating[rating];
    this.onChangeCallback(this.rating);
  }

  //From ControlValueAccessor interface
  writeValue(value: Rating) {
      if (value !== this.rating) {
          this.rating = value;
      }
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
      this.onChangeCallback = fn;
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {
      this.onTouchedCallback = fn;
  }

}
