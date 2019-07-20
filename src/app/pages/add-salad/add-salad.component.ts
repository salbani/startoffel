import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { SaladService } from '../../services/salad.service';
import { Salad } from '../../interfaces/salad.interface';

@Component({
  selector: 'stfl-add-salad',
  templateUrl: './add-salad.component.html',
  styleUrls: ['./add-salad.component.scss']
})
export class AddSaladComponent implements OnInit {

  name = '';
  img: string;

  constructor(private saladService: SaladService) { }

  async ngOnInit() {
  }

  async addSalad() {
    let res = await this.saladService.addSalad({ name: this.name, image: this.img });
  }

  async takeImage(event: Event) {
    const reader = new FileReader();
    reader.onload = () => {
      this.img = reader.result as string;
    }
    reader.readAsDataURL((event.target as HTMLInputElement).files[0])
  }

  getMedia() {
    return typeof navigator.mediaDevices
  }

  hasGetUserMedia() {
    return !!(navigator.mediaDevices &&
      navigator.mediaDevices.getUserMedia);
  }

}
