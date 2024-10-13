import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appSlideInOn]',
  standalone: true
})
export class SlideInOnDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setInitialStyles();
  }

  private setInitialStyles() {
    // Set initial styles: hidden and off-screen to the left
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(100%)');
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'opacity 1s ease-out, transform 1s ease-out');
  }

  @HostListener('window:scroll', [])
  onScroll() {
    if (this.isElementInViewport()) {
      this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
      this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(0)');
    }
  }

  private isElementInViewport(): boolean {
    const rect = this.el.nativeElement.getBoundingClientRect();
    // Check if the element is partially in the viewport
    return (
      rect.top < window.innerHeight &&
      rect.bottom > 0
    );
  }
}
