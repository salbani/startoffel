export interface SaladRating {
  user: string;
  ratings: [
    {
      name: 'Geschmack'
      rating: Rating;
    },
    {
      name: 'Konsistenz'
      rating: Rating;
    },
    {
      name: 'Zubereitung'
      rating: Rating;
    },
    {
      name: 'Optik'
      rating: Rating;
    },
    {
      name: 'Geruch'
      rating: Rating;
    },
    {
      name: 'Mundgefühl'
      rating: Rating;
    }
  ]
}

export enum Rating {
  OneStar = 1,
  TwoStars = 2,
  ThreeStars = 3,
  FourStars = 4,
  FiveStars = 5,
  SixStars = 6,
  SevenStars = 7,
  EightStars = 8,
  NineStars = 9,
  TenStars = 10 
}