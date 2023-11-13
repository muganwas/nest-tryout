import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { CatService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catService: CatService) {}

  @Get()
  getCat(@Query('catName') catName: string): string {
    return this.catService.whatCat(catName);
  }

  @Post()
  createBread(@Body('catBreed') breed: string): string {
    return this.catService.newCat(breed);
  }

  @Get('/brown')
  getBrownCat(): string {
    return this.catService.brownCat();
  }

  @Get('/cheshire')
  getCheshireCat(): string {
    return this.catService.cheshireCat();
  }
}
