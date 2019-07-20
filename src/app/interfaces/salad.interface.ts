import { SaladRating } from "./rating.interface";

export interface Salad{
  id: string;
  date: Date;
  name: string;
  image?: string;
  userRatings: SaladRating[];
}