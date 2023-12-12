import { Injectable } from '@nestjs/common';
const breeds = ['Cheshire', 'Egyptian', 'South Brown'];
@Injectable()
export class CatService {
  whatCat(catName?: string): string {
    return catName ?? 'What cat?!';
  }
  whatBreed(breedNum: number): string {
    if (breeds[breedNum]) {
      return breeds[breedNum];
    }
    return 'NA';
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
  updateCat(breed: string): Promise<string> {
    return new Promise((resolve) => {
      resolve('You have updated breed. ' + breed);
    });
  }
}
