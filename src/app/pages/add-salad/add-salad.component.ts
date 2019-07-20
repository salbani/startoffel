import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { SaladService } from '../../services/salad.service';
import { Salad } from '../../interfaces/salad.interface';

@Component({
  selector: 'stfl-add-salad',
  templateUrl: './add-salad.component.html',
  styleUrls: ['./add-salad.component.scss']
})
export class AddSaladComponent implements OnInit {

  @ViewChild('video')
  videoRef: ElementRef<HTMLVideoElement>
  name = '';

  constructor(private saladService: SaladService) { }

  async ngOnInit() {
  }

  async addSalad() {
    let res = await this.saladService.addSalad({ name: this.name });
  }

  async takeImage() {
    const constraints: MediaStreamConstraints = {
      video: true
    }
    const videoEl = this.videoRef.nativeElement;
    if (this.hasGetUserMedia()) {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      videoEl.srcObject = stream;
    }
  }

  getMedia() {
    return typeof navigator.mediaDevices
  }

  hasGetUserMedia() {
    return !!(navigator.mediaDevices &&
      navigator.mediaDevices.getUserMedia);
  }

}
