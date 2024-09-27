import { Component } from '@angular/core';
import { Coursers } from '../models/coursers';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cousers-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cousers-bar.component.html',
  styleUrl: './cousers-bar.component.css'
})
export class CousersBarComponent {
  categories: Coursers[]=[
    {id: 1, idcategory: 1, title: 'Javascript', description: 'xxxxxxxxx', cost: 'R$500,00', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png', duration: '3 meses' },
    {id: 2, idcategory: 1, title: 'Javascript', description: 'xxxxxxxxx', cost: 'R$500,00', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png', duration: '3 meses' },
    {id: 3, idcategory: 1, title: 'Javascript', description: 'xxxxxxxxx', cost: 'R$500,00', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png', duration: '3 meses' },
    {id: 4, idcategory: 1, title: 'Javascript', description: 'xxxxxxxxx', cost: 'R$500,00', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png', duration: '3 meses' },
    ]
}
