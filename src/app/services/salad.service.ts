import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddSaladDto } from '../interfaces/add-salad.dto';
import { SaladRating } from '../interfaces/rating.interface';
import { Salad } from '../interfaces/salad.interface';

@Injectable({
  providedIn: 'root'
})
export class SaladService {

  constructor(private http: HttpClient) { }

  getSalads() {
    return this.http.get<Salad[]>('/api/salads').toPromise();
  }

  getSalad(id: string) {
    return this.http.get<Salad>('/api/salads/' + id).toPromise();
  }

  edit(salad: Salad) {
    return this.http.post<Salad>('/api/salads/edit', salad).toPromise();
  }

  deleteSalad(id: string) {
    return this.http.get<Salad>('/api/salads/delete/' + id).toPromise();
  }

  getActiveSalad() {
    return this.http.get<Salad>('/api/salads/active').toPromise();
  }

  setActiveSalad(id: string) {
    return this.http.get<Salad>('/api/salads/set/' + id).toPromise();
  }

  addSalad(salad: AddSaladDto) {
    return this.http.post<Salad>('/api/salads/', salad).toPromise();
  }

  addRating(rating: SaladRating) {
    return this.http.post<Salad>('/api/salads/rating', rating).toPromise();
  }
}
