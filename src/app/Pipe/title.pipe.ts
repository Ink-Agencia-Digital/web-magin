import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {
  transform(value: any): any {
    if(!value) return value; 
    return value.substring(1,2).toUpperCase() + value.substr(2).toLocaleLowerCase();
  }
}
