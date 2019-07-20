import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'stfl-potato',
  templateUrl: './potato.component.html',
  styleUrls: ['./potato.component.scss']
})
export class PotatoComponent implements OnInit {

  @Input()
  fill = true;

  constructor() { }

  ngOnInit() {
  }

}
