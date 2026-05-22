import { Component, inject, signal } from '@angular/core';
import { Food, Products } from '../../../../services/food';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CurrencyPipe } from '@angular/common';
import { Button } from "../../../../shared/button/button";
import { ProductModal } from "./product-modal/product-modal";

@Component({
  selector: 'app-product-management',
  imports: [CurrencyPipe, ProductModal],
  templateUrl: './product-management.html',
  styleUrl: './product-management.css',
})
export class ProductManagement {
  data = signal<Products>([]);
  isModalOpen = signal<boolean>(false);
  private foodService = inject(Food);

  constructor() {
    this.foodService
      .getProducts()
      .pipe(takeUntilDestroyed())
      .subscribe((response) => this.data.set(response));
  }
}
