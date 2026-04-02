import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Service {
  icon: string;
  name: string;
  desc: string;
  price: string;
  unit: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services: Service[] = [
    {
      icon: '💍',
      name: 'Noiva',
      desc: 'O look mais especial do teu dia. Desde o ensaio até à cerimónia, garantimos perfeição duradoura.',
      price: 'a partir de 120€',
      unit: '/ sessão'
    },
    {
      icon: '✨',
      name: 'Social',
      desc: 'Eventos, jantares, festas. Um look sofisticado para cada momento que merece ser especial.',
      price: 'a partir de 28€',
      unit: '/ sessão'
    },
    {
      icon: '🪞',
      name: 'Workshop automaquilhagem',
      desc: 'Descobre como realçar a tua beleza de forma simples, prática e personalizada',
      price: 'a partir de 80€',
      unit: '/ sessão'
    },
    {
      icon: '📸',
      name: 'Editorial',
      desc: 'Para sessões fotográficas e editoriais de moda. Criatividade e técnica ao serviço da imagem.',
      price: 'a partir de 60€',
      unit: '/ hora'
    }
  ];
}
