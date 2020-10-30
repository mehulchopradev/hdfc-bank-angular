import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'caps'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): string {
    if (value) {
      if (value.length > 1) {
        return value[0].toUpperCase() + value.substring(1).toLowerCase();
      }

      return value[0].toUpperCase();
    }

    return value;
  }

}
