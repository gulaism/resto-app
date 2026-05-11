import { Component, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Food, Products } from '../../services/food';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home-page',
  imports: [DatePipe],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  today: number = Date.now();
  activeCat = signal<string>('hot dishes');
  private data = signal<Products>([]);
  private foodService = inject(Food);

  constructor(){
    this.foodService.getProducts().pipe(takeUntilDestroyed()).subscribe(response => this.data.set(response));
    console.log(this.data());
  }
}
