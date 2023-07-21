import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: String): String {
    if(!value) return "";
    let words = value.split(' ');
    for (var i = 0; i < words.length; i++){
      if (i>0 && this.isPreposition(words[i])) {
        words[i] = words[i].toLowerCase();
      } else {
       words[i] = words[i].substring(0,1).toUpperCase() + words[i].substring(1).toLowerCase();
      }

    }
    return words.join(' ');
  }

  isPreposition(word : string): boolean {
    let prepositions = [
      'of',
      'the'
    ]; 
    return prepositions.includes(word.toLowerCase());
  }

}
