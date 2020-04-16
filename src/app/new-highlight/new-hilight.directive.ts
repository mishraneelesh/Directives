import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appNewHilight]'
})
export class NewHilightDirective implements OnInit{

  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') bcgcolor: string;
  constructor(private elementref: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.bcgcolor = this.defaultColor;
    //this.renderer.setStyle(this.elementref.nativeElement,'background-color', 'blue')
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    //this.renderer.setStyle(this.elementref.nativeElement,'background-color', 'blue')
  this.bcgcolor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
    //this.renderer.setStyle(this.elementref.nativeElement,'background-color', 'transparent')
    this.bcgcolor = this.defaultColor;
  }

}
