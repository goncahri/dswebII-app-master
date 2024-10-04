import { Component } from '@angular/core';
import { Coursers } from '../models/coursers';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-cousers-bar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './cousers-bar.component.html',
  styleUrl: './cousers-bar.component.css',
})
export class CousersBarComponent {
  categories2: Coursers[] = [
    {
      id: 1,
      idcategory: 1,
      title: 'Javascript para iniciantes',
      description: 'Aprenda Java de forma rápida!!!',
      cost: 500.5,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
      duration: '3 meses',
    },
    {
      id: 1,
      idcategory: 2,
      title: 'Javascript para iniciantes',
      description: 'Aprenda Java de forma rápida!!!',
      cost: 500.5,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
      duration: '3 meses',
    },
    {
      id: 1,
      idcategory: 3,
      title: 'Javascript para iniciantes',
      description: 'Aprenda Java de forma rápida!!!',
      cost: 500.5,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
      duration: '3 meses',
    },
    {
      id: 1,
      idcategory: 4,
      title: 'Javascript para iniciantes',
      description: 'Aprenda Java de forma rápida!!!',
      cost: 500.5,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
      duration: '3 meses',
    },
  ];
}
