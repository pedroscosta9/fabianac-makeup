import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Testimonial {
  text: string;
  name: string;
  event: string;
  avatar: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      text: 'Espaço super acolhedor, a Fabiana é uma profissional muito atenta e perfeccionista. Adoro o trabalho dela, sempre que preciso de uma boa maquilhagem é aqui que venho. Recomendo mesmo muito!',
      name: 'Andreia Bento',
      event: 'Social · Fevereiro 2026',
      avatar: 'assets/images/avatar-1.jpg'
    },
    {
      text: 'Sempre que preciso de maquilhagem a minha escolha é a Fabiana. O serviço e o atendimento são incríveis 💓 Recomendo muito!',
      name: 'Ana Machado',
      event: 'Social · Fevereiro 2026',
      avatar: 'assets/images/avatar-2.jpg'
    },
    {
      text: 'Adorei a maquilhagem! Correu super bem! Muito obrigada pelo carinho ❤️',
      name: 'Patricia Martins',
      event: 'Noiva · Outubro 2023',
      avatar: 'assets/images/avatar-3.jpg'
    }
  ];
}