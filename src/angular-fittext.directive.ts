import {
  AfterViewInit,
  Directive,
  Renderer2,
  ElementRef,
  Input,
  HostListener,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[fittext]',
})
export class AngularFittextDirective implements AfterViewInit, OnInit, OnChanges {

  @Input() fittext? = true;
  @Input() compression? = 1;
  @Input() activateOnResize? = true;
  @Input() minFontSize?: number | 'inherit' = 0;
  @Input() maxFontSize?: number | 'inherit' = Number.POSITIVE_INFINITY;
  @Input() delay? = 100;

  private fittextParent: HTMLElement;
  private fittextElement: HTMLElement;
  private fittextMinFontSize: number;
  private fittextMaxFontSize: number;
  private computed: CSSStyleDeclaration;
  private newlines: number;
  private lineHeight: string;
  private display: string;
  private calcSize = 10;
  private resizeTimeout: number;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {
    this.fittextElement = el.nativeElement;
    this.fittextParent = this.fittextElement.parentElement;
    this.computed = window.getComputedStyle(this.fittextElement);
    this.newlines = this.fittextElement.childElementCount > 0 ? this.fittextElement.childElementCount : 1;
    this.lineHeight = this.computed['line-height'];
    this.display = this.computed['display'];
  }

  @HostListener('window:resize')
  public onWindowResize = (): void => {
    if (this.activateOnResize) {
      this.setFontSize();
    }
  }

  public ngOnInit() {
    this.fittextMinFontSize = this.minFontSize === 'inherit' ? this.computed['font-size'] : this.minFontSize;
    this.fittextMaxFontSize = this.maxFontSize === 'inherit' ? this.computed['font-size'] : this.maxFontSize;
  }

  public ngAfterViewInit() {
    this.setFontSize();
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes['compression'] && !changes['compression'].firstChange) {
      this.setFontSize();
    }
  }

  private setFontSize = (): void => {
    this.resizeTimeout = setTimeout(
      (() => {
        if (this.fittextElement.offsetHeight * this.fittextElement.offsetWidth !== 0) {
          // reset to default
          this.setStyles(this.calcSize, 1, 'inline-block');
          // set new
          this.setStyles(this.calculateNewFontSize(), this.lineHeight, this.display);
        }
      }).bind(this),
      this.delay
    );
  }

  private calculateNewFontSize = (): number => {
    const ratio = (this.calcSize * this.newlines) / this.fittextElement.offsetWidth / this.newlines;

    return Math.max(
      Math.min(
        (this.fittextParent.offsetWidth -
          (parseFloat(getComputedStyle(this.fittextParent).paddingLeft) +
            parseFloat(getComputedStyle(this.fittextParent).paddingRight)) -
          6) *
        ratio *
        this.compression,
        this.fittextMaxFontSize
      ),
      this.fittextMinFontSize
    );
  }

  private setStyles = (fontSize: number, lineHeight: number | string, display: string): void => {
    this.renderer.setStyle(this.fittextElement, 'fontSize', fontSize.toString() + 'px');
    this.renderer.setStyle(this.fittextElement, 'lineHeight', lineHeight.toString());
    this.renderer.setStyle(this.fittextElement, 'display', display);
  }
}
