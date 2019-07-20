import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SaladService } from '../../services/salad.service';
import { Salad } from '../../interfaces/salad.interface';

@Component({
  selector: 'stfl-edit-salad',
  templateUrl: './edit-salad.component.html',
  styleUrls: ['./edit-salad.component.scss']
})
export class EditSaladComponent implements OnInit {

  salad: Salad;

  constructor(private saladService: SaladService, private route: ActivatedRoute, private router: Router) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.salad = await this.saladService.getSalad(id);
    console.log(this.salad, id);
    
  }

  async saveSalad() {
    let res = await this.saladService.edit(this.salad);
    this.router.navigate(['/salads'])
  }

  async takeImage(event: Event) {
    const reader = new FileReader();
    reader.onload = () => {
      this.salad.image = reader.result as string;
    }
    reader.readAsDataURL((event.target as HTMLInputElement).files[0])
  }

  async deleteSalad() {
    await this.saladService.deleteSalad(this.salad.id);
    this.router.navigate(['/salads'])
  }

}
