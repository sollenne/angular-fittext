import {Directive, ElementRef, Input, AfterViewInit, HostListener} from '@angular/core';

@Directive({
    selector: '[FitText]'
})
export class Ng4FittextDirective implements AfterViewInit {

    @Input('appFitTextDirective') fittext: boolean;
    @Input('container') container: HTMLDivElement;
    @Input('activateOnResize') activateOnResize = true;
    @Input('activateOnInputEvents') activateOnInputEvents: boolean;
    @Input('maxFontSize') maxFontSize: number;
    @Input('minFontSize') minFontSize: number;
    @Input('compression') compression: number;

    public settings: any;
    public fontSize: number;
    public containerWidth: number;

    constructor(
        public el: ElementRef
    ) {

        this.settings = {
            'minFontSize': -1 / 0,
            'maxFontSize': 1 / 0,
            'compression': 0.9
        };

        this.compression = this.compression || this.settings.compression;
        this.minFontSize = this.minFontSize || this.settings.minFontSize;
        this.maxFontSize = this.maxFontSize || this.settings.maxFontSize;
    }

    private setFontSize = (): void => {
        const windowWidth = window.screen.width;
        const parentWidth = this.container.parentElement.clientWidth;
        parentWidth > windowWidth ? this.containerWidth = windowWidth : this.containerWidth = parentWidth;

        this.fontSize = Math.max(Math.min(this.containerWidth / (this.compression * 10), this.maxFontSize), this.minFontSize);
        return this.el.nativeElement.style.setProperty('font-size', (this.fontSize).toString() + 'px');
    };

    @HostListener('window:resize', ['$event'])
    public onResize = (): void => {
        if (this.activateOnResize && this.fittext) {
            this.setFontSize();
        }
    };

    ngAfterViewInit() {
        if (this.fittext) {
            this.setFontSize();
        }
    }
}
