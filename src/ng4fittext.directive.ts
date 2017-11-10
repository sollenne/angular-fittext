import { AfterViewInit, Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges  } from '@angular/core';

@Directive({
    selector: '[fittext]'
})
export class Ng4FittextDirective implements AfterViewInit {

    @Input('fittext') fittext: boolean = true;
    @Input('container') container: HTMLDivElement;
    @Input('activateOnResize') activateOnResize: boolean = true;
    @Input('minFontSize') minFontSize: number = -1 / 0;
    @Input('maxFontSize') maxFontSize: number = 1 / 0;
    @Input('compression') compression: number = 1;

    constructor(public el: ElementRef) {}

    private setFontSize = (): void => {
        if (this.fittext) {
            let containerWidth, fontSize;
            const windowWidth = window.screen.width;
            const parentWidth = this.container.parentElement.clientWidth;
            parentWidth > windowWidth ? containerWidth = windowWidth : containerWidth = parentWidth;
            fontSize = Math.max(Math.min(containerWidth / (this.compression * 10), this.maxFontSize), this.minFontSize);

            // console.log('Ng4FittextDirective#setFontSize; windowWidth:', windowWidth, '; parentWidth:', parentWidth, '; containerWidth:', containerWidth, '; fontSize:', fontSize, '; cmpression: ', this.compression);
            return this.el.nativeElement.style.setProperty('font-size', (fontSize).toString() + 'px');
        }
    };

    ngOnChanges(changes: SimpleChanges) {
        // if compression is changed calc and set new font size
        if (changes['compression'] && !changes['compression'].firstChange) {

            this.setFontSize();
        }
    }

    @HostListener('window:resize', ['$event'])
    public onResize = (): void => {
        if (this.activateOnResize) {
            this.setFontSize();
        }
    };

    ngAfterViewInit() {
        this.setFontSize();
    }
}
