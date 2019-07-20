import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { SaladService } from '../../services/salad.service';
import { Salad } from '../../interfaces/salad.interface';
import { SaladRating, Rating } from '../../interfaces/rating.interface';

@Component({
  selector: 'stfl-rate-salad',
  templateUrl: './rate-salad.component.html',
  styleUrls: ['./rate-salad.component.scss']
})
export class RateSaladComponent implements OnInit {

  salad: Salad = {
    id: '!23',
    name: 'test',
    date: new Date(),
    userRatings: []
  }

  saladRating: SaladRating = {
    user: '',
    ratings: [
      {
        name: 'Geschmack',
        rating: Rating.FourStars
      },
      {
        name: 'Konsistenz',
        rating: Rating.FourStars
      },
      {
        name: 'Zubereitung',
        rating: Rating.FourStars
      },
      {
        name: 'Optik',
        rating: Rating.FourStars
      },
      {
        name: 'Geruch',
        rating: Rating.FourStars
      },
      {
        name: 'Mundgefühl',
        rating: Rating.FourStars
      },
    ]
  }

  constructor(private router: Router,
    private userService: UserService,
    private saladService: SaladService) { }

  async ngOnInit() {
    
    if(this.userService.notLoggedIn)
      this.router.navigateByUrl('/login')

    this.saladRating.user = this.userService.user;

    this.salad = await this.saladService.getActiveSalad();
    console.log(this.salad);
    
  }

  rate(){
    this.saladService.addRating(this.saladRating);
  }

}
