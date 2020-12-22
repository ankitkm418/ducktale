import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appToUpperCase]'
})
export class ToUpperCaseDirective {

  constructor() { }

@HostListener('input',['$event'])
onKeydown(event){
  event.target['value'] = event.target['value'].toUpperCase();
}


}
