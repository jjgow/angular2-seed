import { Directive, Input, ElementRef, HostListener, EventEmitter, Output } from 'angular2/core'

@Directive({ selector: '[selectAll]' })
export class SelectAllDirective {
    private selectElement: any;
    private selectedItemsd: number[];

    constructor(private el: ElementRef) {
        this.selectElement = el.nativeElement;
    }

    @HostListener('change')
    onChange() {
        
        if (this.selectElement.options[0].selected) {
            for (let i = 0; i < this.selectElement.options.length; i++) {
                this.selectElement.options[i].selected = true;
            }   
            let changeEvent = new Event("change", { "bubbles": true, "cancelable": false });
            this.selectElement.dispatchEvent(changeEvent);
        }
    }
}