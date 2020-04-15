import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
    selector: "[appBgHighlight]"
})
export class BGHighlight implements OnInit{
    constructor(private elementref: ElementRef) {

    }

    ngOnInit() {
        this.elementref.nativeElement.style.backgroundColor = "green" ;
    }

}