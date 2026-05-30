import { Component, computed, inject, signal } from '@angular/core';
import { Food, Products } from '../../../../services/food';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CurrencyPipe } from '@angular/common';
import { Button } from "../../../../shared/button/button";
import { ProductModal } from "./product-modal/product-modal";
import { ImageSrcPipe } from '../../../../shared/pipes/image-src-pipe';

@Component({
  selector: 'app-product-management',
  imports: [CurrencyPipe, ProductModal, ImageSrcPipe],
  templateUrl: './product-management.html',
  styleUrl: './product-management.css',
})
export class ProductManagement {
  data = signal<Products>([]);
  isModalOpen = signal<boolean>(false);
  private foodService = inject(Food);
  selectedCat = signal<string>('hot dishes');
  // filteredData = signal<Products>([]);

  constructor() {
    this.foodService
      .getProducts()
      .pipe(takeUntilDestroyed())
      .subscribe((response) => {
        this.data.set(response);
        // this.filteredData.set(response.filter(d => d.category === this.selectedCat()))
      });
  }

  filteredCategory = computed(() => {
    return this.data().filter((item) => item.category === this.selectedCat());
  })
}
