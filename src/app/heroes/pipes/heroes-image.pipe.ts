import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heroesImage'
})
export class HeroesImagePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
