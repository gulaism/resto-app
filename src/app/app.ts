import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Food, Products } from './services/food';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('resto-app');
  private foodService = inject(Food);
  food = signal<Products>([]);

  constructor() {
    this.foodService.getProducts().pipe(takeUntilDestroyed()).subscribe(data => {
      this.food.set(data)
      console.log(data);
      console.log(this.food());
    });
      console.log("All products: ", this.food());
  }
}
