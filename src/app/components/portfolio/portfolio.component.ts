import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface PortfolioItem {
  img: string;
  label: string;
  tag: string;
  span: string; // grid-column span class
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  items: PortfolioItem[] = [
    {
      img: 'assets/images/portfolio-1.jpg',
      label: 'Sara Ferreira',
      tag: 'Golden Vibes',
      span: 'span-5'
    },
    {
      img: 'assets/images/portfolio-2.jpg',
      label: 'Filipa Barros',
      tag: 'Brown smoke eye',
      span: 'span-4'
    },
    {
      img: 'assets/images/portfolio-3.jpg',
      label: 'Soraia Almeida',
      tag: 'Signature look',
      span: 'span-3'
    },
    {
      img: 'assets/images/portfolio-4.jpg',
      label: 'Mariana Ferreira',
      tag: 'Egyptian eyeliner',
      span: 'span-3'
    },
    {
      img: 'assets/images/portfolio-5.jpg',
      label: 'Filipa Barros',
      tag: 'Glow skin',
      span: 'span-3'
    },
    {
      img: 'assets/images/portfolio-6.jpg',
      label: 'Tatiana',
      tag: 'Blue makeup',
      span: 'span-3'
    },
        {
      img: 'assets/images/portfolio-7.jpg',
      label: 'Lara Silva',
      tag: 'Halo eye',
      span: 'span-3'
    }
  ];
}