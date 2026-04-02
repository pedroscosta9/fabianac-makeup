import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-marquee',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="marquee-section">
      <div class="marquee-track">
        @for (item of items; track item) {
          <span class="marquee-item">{{ item }}</span>
        }
        @for (item of items; track item) {
          <span class="marquee-item">{{ item }}</span>
        }
      </div>
    </div>
  `,
  styles: [`
    .marquee-section {
      padding: 18px 0;
      background: var(--brown);
      overflow: hidden;
      border-top: 1px solid rgba(201,169,110,0.25);
      border-bottom: 1px solid rgba(201,169,110,0.25);
    }
    .marquee-track {
      display: flex;
      gap: 60px;
      animation: marquee 24s linear infinite;
      white-space: nowrap;
    }
    .marquee-item {
      font-size: 11px;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      color: var(--gold-light);
      flex-shrink: 0;
      display: flex;
      align-items: center;
      gap: 20px;
    }
    .marquee-item::before {
      content: '✦';
      color: var(--gold);
      font-size: 9px;
    }
  `]
})
export class MarqueeComponent {
  items = [
    'Maquilhagem de Noiva',
    'Editorial & Moda',
    'Eventos Especiais',
    'Sessões Fotográficas',
    'Formação Profissional',
    'Maquilhagem Artística',
  ];
}