import { Component, OnInit } from '@angular/core';
import { SaladService } from '../../services/salad.service';
import { Salad } from '../../interfaces/salad.interface';

@Component({
  selector: 'stfl-salads',
  templateUrl: './salads.component.html',
  styleUrls: ['./salads.component.scss']
})
export class SaladsComponent implements OnInit {

  salads: Salad[] = [];

  constructor(private saladService: SaladService) { }

  async ngOnInit() {
    try {
      
      this.salads = await this.saladService.getSalads();
    } catch (error) {
      console.log(error);
      
    }
  }

  activate(salad: Salad){
    this.saladService.setActiveSalad(salad.id);
  }

}
