import { SaladRating } from "./rating.interface";

export interface Salad{
  id: string;
  date: Date;
  deleted: boolean;
  name: string;
  image?: string;
  userRatings: SaladRating[];
}