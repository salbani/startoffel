import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { SaladService } from './salad.service';
import { AddSaladDto } from './interfaces/add-salad.dto';
import { SaladRating } from './interfaces/rating.interface';

@Controller('salads')
export class SaladController {

  constructor(private saladService: SaladService){}

  @Get()
  getSalads(){
    return this.saladService.getSalads();
  }

  @Get('active')
  getActiveSalad(){
    return this.saladService.getActiveSalad();
  }
  
  @Get(':id')
  getSalad(@Param('id') id: string){
    return this.saladService.getSalad(id);
  }
  
  @Get('set/:id')
  setSalad(@Param('id') id: string){
    return this.saladService.setActiveSalad(id);
  }

  @Post()
  addSalad(@Body() salad: AddSaladDto){
    console.log(salad);
    
    return this.saladService.addSalad(salad);
  }

  @Post('rating')
  addRating(@Body() rating: SaladRating) {
    return this.saladService.addRatingToActiveSalad(rating);
  }
}
