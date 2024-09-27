import { Component } from '@angular/core';
import { Category } from '../models/category';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-bar.component.html',
  styleUrl: './category-bar.component.css'
})
export class CategoryBarComponent {
  categories: Category[]=[
    {id: 1, title: 'Curso de Ti', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Palmeiras_logo.svg/800px-Palmeiras_logo.svg.png'},
    {id: 2, title: 'Category 2', image: 'https://i.pinimg.com/originals/26/e4/d9/26e4d96bafd9cdf64eb7eefc71fb32b7.png'},
    {id: 3, title: 'Category 3', image: 'https://sep-bucket-prod.s3.amazonaws.com/wp-content/uploads/2021/10/1917-3.png'},
    {id: 4, title: 'Category 4', image: 'https://s2-ge.glbimg.com/zNkvJJ_2fBmwgMATjvFYit5So60=/0x0:334x335/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/k/s/a3aJTBRQS2b4Gxrr7mcQ/1942.png'},
    {id: 5, title: 'Category 5', image: 'https://sep-bucket-prod.s3.amazonaws.com/wp-content/uploads/2021/10/1919.png'},
    ]
}
