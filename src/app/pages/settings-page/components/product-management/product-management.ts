import { Component, inject, signal } from '@angular/core';
import { Food, Products } from '../../../../services/food';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CurrencyPipe } from '@angular/common';
import { Button } from "../../../../shared/button/button";

@Component({
  selector: 'app-product-management',
  imports: [CurrencyPipe, Button],
  templateUrl: './product-management.html',
  styleUrl: './product-management.css',
})
export class ProductManagement {
  data = signal<Products>([]);
  private foodService = inject(Food);
  selectedPage = signal<string>('management');

  constructor() {
    this.foodService
      .getProducts()
      .pipe(takeUntilDestroyed())
      .subscribe((response) => this.data.set(response));
  }
}
