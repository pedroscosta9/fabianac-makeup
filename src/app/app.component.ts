import { Component, OnInit, HostListener, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  cursorX = 0;
  cursorY = 0;
  ringX = 0;
  ringY = 0;
  animFrameId: number = 0;

  @ViewChild('cursor') cursorEl!: ElementRef<HTMLDivElement>;
  @ViewChild('cursorRing') ringEl!: ElementRef<HTMLDivElement>;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.cursorX = e.clientX;
    this.cursorY = e.clientY;
  }

  ngAfterViewInit() {
    this.animateCursor();
    this.initReveal();
  }

  animateCursor() {
    const cursor = this.cursorEl.nativeElement;
    const ring = this.ringEl.nativeElement;

    const animate = () => {
      cursor.style.left = this.cursorX - 5 + 'px';
      cursor.style.top = this.cursorY - 5 + 'px';
      this.ringX += (this.cursorX - this.ringX) * 0.12;
      this.ringY += (this.cursorY - this.ringY) * 0.12;
      ring.style.left = this.ringX - 18 + 'px';
      ring.style.top = this.ringY - 18 + 'px';
      this.animFrameId = requestAnimationFrame(animate);
    };
    animate();
  }

  initReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const delay = parseFloat(el.dataset['delay'] || '0');
          setTimeout(() => el.classList.add('visible'), delay * 1000);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.12 });

    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }, 100);
  }
}
