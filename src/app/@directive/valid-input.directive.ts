import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[ngxValidInput]'
})
export class ValidInputDirective implements OnInit {
  @Input()
  validClass: string = 'success';

  constructor(private el: ElementRef, private control: NgControl) {}

  ngOnInit() {
    this.control.statusChanges.subscribe((status) => {
      if (status === 'VALID') {
        this.el.nativeElement.classList.add(this.validClass);
      } else {
        this.el.nativeElement.classList.remove(this.validClass);
      }
    });
  }
}
