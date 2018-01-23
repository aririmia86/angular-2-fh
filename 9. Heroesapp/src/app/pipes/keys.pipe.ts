import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform(value: string[]): string[] {
    let keys:string[] = [];
    for (let key in value) {
      keys.push(key);
    }
    return keys;
  }

}
