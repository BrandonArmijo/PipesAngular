import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

  transform(value: string, enMayuscula: boolean): string {
    return (enMayuscula) ? value.toUpperCase() : value.toLocaleLowerCase()

    // if (enMayuscula) {
    //   return value.toUpperCase();
    // } else {
    //   return value.toLowerCase()
    // }
  }
}
