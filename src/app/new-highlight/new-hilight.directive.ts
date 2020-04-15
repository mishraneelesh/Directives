import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appNewHilight]'
})
export class NewHilightDirective implements OnInit{

  constructor(private elementref: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.elementref.nativeElement,'background-color', 'blue')
  }

  
}
