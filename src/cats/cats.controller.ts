import {
  Controller,
  Get,
  Post,
  Query,
  Body,
  Param,
  ParseIntPipe,
  UsePipes,
} from '@nestjs/common';
import { CatService } from './cats.service';
import { ValidationPipe } from './pipes/validation.pipe';
import { CreateCatDto, createCatSchema } from './schemas/createCat.schema';

@Controller('cats')
export class CatsController {
  constructor(private readonly catService: CatService) {}

  @Get()
  getCat(@Query('catName') catName: string): string {
    return this.catService.whatCat(catName);
  }

  @Get('/breed/:breedNum')
  getCatByNumber(@Param('breedNum', ParseIntPipe) breedNum: number): string {
    return this.catService.whatBreed(breedNum);
  }

  @Post()
  @UsePipes(new ValidationPipe(createCatSchema))
  createBreed(@Body() cat: CreateCatDto): string {
    return this.catService.newCat(cat.catBreed);
  }
  @Post('/update/:breedName')
  updateBreed(@Param('breedName') breedName: string): Promise<string> {
    return this.catService.updateCat(breedName);
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
