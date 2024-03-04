import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { document } from 'postcss';
import { ViewportScroller } from '@angular/common';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-navigathion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigathion.component.html',
  styleUrl: './navigathion.component.css'
})
export class NavigathionComponent {

  navdis = true
 // constructor(private viewportScroller: ViewportScroller,@Inject(DOCUMENT) private document: Document) {}
 constructor(private viewportScroller: ViewportScroller, @Inject(DOCUMENT) private document: Document) {}
  DispyeNave(){
    this.navdis = !this.navdis
  }


  skill(){
    this.viewportScroller.scrollToAnchor('skills');
    
  }

  aubou(sectionId: string):void{
    this.viewportScroller.scrollToAnchor(sectionId);
  }

  // scrollToBottom(): void {
  
  //   const currentPosition = this.viewportScroller.getScrollPosition();
  //   const startPosition = currentPosition[1]; // current vertical scroll position
  //   const endPosition = this.document.body.scrollHeight; // total scrollable height

  //   this.smoothScrollTo(startPosition, endPosition, 1000); // 1000 milliseconds (1 second)
  // }

  // private smoothScrollTo(startPosition: number, endPosition: number, duration: number) {
  //   const startTime = performance.now();
  //   const scrollStep = (timestamp: number) => {
  //     const currentTime = timestamp - startTime;
  //     if (currentTime < duration) {
  //       const ease = this.easeInOutQuad(currentTime, startPosition, endPosition - startPosition, duration);
  //       window.scrollTo(0, ease);
  //       requestAnimationFrame(scrollStep);
  //     } else {
  //       window.scrollTo(0, endPosition);
  //     }
  //   };
  //   requestAnimationFrame(scrollStep);
  // }

  // // Easing function for smooth scrolling
  // private easeInOutQuad(t: number, b: number, c: number, d: number): number {
  //   t /= d / 2;
  //   if (t < 1) return c / 2 * t * t + b;
  //   t--;
  //   return -c / 2 * (t * (t - 2) - 1) + b;
  // }
//working code 
  scrollToSkills(conta : string): void {
    const skillElement = this.document.getElementById(conta);
    if (skillElement) {
      skillElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}
