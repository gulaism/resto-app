import { Component, inject, signal } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { Food, Products } from '../../services/food';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Orders } from "./components/orders/orders";

@Component({
  selector: 'app-home-page',
  imports: [DatePipe, CurrencyPipe, Orders],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  today: number = Date.now();
  activeCat = signal<string>('hot dishes');
  data = signal<Products>([]);
  private foodService = inject(Food);

  constructor(){
    this.foodService.getProducts().pipe(takeUntilDestroyed()).subscribe(response => this.data.set(response));
    console.log(this.data());
  }
}
