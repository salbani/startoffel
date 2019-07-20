import { Injectable } from '@nestjs/common';
import { Salad } from './interfaces/salad.interface';
import { AddSaladDto } from './interfaces/add-salad.dto';
import { SaladRating } from './interfaces/rating.interface';
import * as fs from 'fs';

@Injectable()
export class SaladService {
  salads: Salad[] = [];
  activeSalad: Salad;

  path = 'C:/Users/simon/AppData/Roaming/startoffel/salads.json';

  constructor() {
    if (fs.existsSync(this.path)) {
      let raw = fs.readFileSync(this.path, "utf8");
      this.salads = JSON.parse(raw);
    }
    
  }

  getSalads() {
    return this.salads;
  }

  getSalad(id: string) {
    return this.salads.find(val => val.id == id)
  }

  getActiveSalad() {
    return this.activeSalad;
  }

  addSalad(newSalad: AddSaladDto) {
    const salad: Salad = {
      id: this.generateId(),
      date: new Date(),
      name: newSalad.name,
      image: newSalad.image,
      userRatings: []
    }
    this.salads.push(salad);
    this.activeSalad = salad;
    this.save();
    return salad;
  }

  setActiveSalad(id: string) {
    const salad = this.getSalad(id);
    if (salad == null)
      return salad;
    this.activeSalad = salad;
    return salad;
  }

  addRatingToActiveSalad(rating: SaladRating) {
    return this.addRating(this.activeSalad.id, rating);
  }

  addRating(saladId: string, rating: SaladRating) {
    const salad = this.getSalad(saladId);
    if (typeof salad == null)
      return salad;
    let userRatingIndex = salad.userRatings.findIndex(val => val.user == rating.user);
    if (userRatingIndex >= 0)
      salad.userRatings.splice(userRatingIndex, 1);
    salad.userRatings.push(rating);
    this.save();
    return salad;
  }

  save() {
    const file = JSON.stringify(this.salads);
    fs.writeFileSync(this.path, file, {encoding: "utf8"});
  }

  generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
}
