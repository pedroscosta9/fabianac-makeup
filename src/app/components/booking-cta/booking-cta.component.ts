import { Component } from '@angular/core';

@Component({
  selector: 'app-booking-cta',
  standalone: true,
  template: `
    <section class="booking-section">
      <div class="booking-eyebrow">Vamos criar algo especial</div>
      <h2 class="booking-title">
        Pronta para te<br><em>sentires linda?</em>
      </h2>
      <p class="booking-sub">
       Faz a tua marcação e vamos conversar sobre
        o look perfeito para o teu momento especial.
      </p>
      <div class="booking-actions">
<a href="https://wa.me/351914492648" class="btn-cream">
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style="vertical-align: middle; margin-right: 8px;">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
  Falar no WhatsApp
</a>
        <a href="#marcacao" class="btn-outline-cream">Ou marca aqui →</a>
      </div>
    </section>
  `,
  styles: [`
    .booking-section {
      padding: var(--section-pad);
      background: var(--brown);
      position: relative;
      overflow: hidden;
      text-align: center;

      &::before {
        content: '';
        position: absolute;
        width: 700px; height: 700px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(201,169,110,0.13) 0%, transparent 70%);
        top: 50%; left: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
      }
    }

    .booking-eyebrow {
      font-size: 11px;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      color: var(--gold);
      margin-bottom: 28px;
    }

    .booking-title {
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(44px, 6vw, 72px);
      font-weight: 300;
      color: var(--cream);
      line-height: 1.1;
      margin-bottom: 24px;
      position: relative;

      em { font-style: italic; color: var(--blush); }
    }

    .booking-sub {
      font-size: 15px;
      color: rgba(250,246,241,0.5);
      max-width: 440px;
      margin: 0 auto 52px;
      line-height: 1.8;
      font-weight: 300;
    }

    .booking-actions {
      display: flex;
      gap: 24px;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
    }

    .btn-cream {
      background: var(--cream);
      color: var(--brown);
      padding: 18px 48px;
      border-radius: 50px;
      font-size: 12px;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      transition: transform 0.25s, box-shadow 0.25s;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 16px 48px rgba(0,0,0,0.3);
      }
    }

    .btn-outline-cream {
      color: rgba(250,246,241,0.6);
      font-size: 12px;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      gap: 10px;
      transition: color 0.3s;
      padding-bottom: 4px;
      border-bottom: 1px solid rgba(250,246,241,0.2);

      &:hover { color: var(--blush); }
    }
  `]
})
export class BookingCtaComponent {}
