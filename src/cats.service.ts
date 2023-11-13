import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  whatCat(catName?: string): string {
    return 'What cat, ' + catName + '?!';
  }
  brownCat(): string {
    return "I'm a brown cat!";
  }
  cheshireCat(): string {
    return "I'm a cheshire cat!";
  }
  newCat(breed: string): string {
    return 'We have a new breed: ' + breed;
  }
}
