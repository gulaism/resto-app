import { Component, computed, ElementRef, inject, signal, viewChild } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { Food, Product, Products } from '../../services/food';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Orders } from './components/orders/orders';
import { Card } from '../../shared/card/card';

@Component({
  selector: 'app-home-page',
  imports: [DatePipe, CurrencyPipe, Orders, Card],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  today: number = Date.now();
  activeCat = signal<string>('hot dishes');
  data = signal<Products>([]);
  searchedItem = signal<string>('');
  orderedItems = signal<Products>([]);
  private foodService = inject(Food);

  searchInput = viewChild<ElementRef<HTMLInputElement>>('searchInput');

  constructor() {
    this.foodService
      .getProducts()
      .pipe(takeUntilDestroyed())
      .subscribe((response) => this.data.set(response));
  }

  filteredData = computed(() => {
    return this.data().filter((item) => {
      const matchesCategory = item.category.trim() === this.activeCat().trim();
      const matchesSearch =
        this.searchedItem() === '' || item.name.trim().toLowerCase().includes(this.searchedItem());
      return matchesCategory && matchesSearch;
    });
  });

  onRemoveItem(id: number) {
    this.orderedItems.update((items) => items.filter((item) => item.id !== id));
  }

  searchData(event: Event) {
    this.searchedItem.set((event.target as HTMLInputElement).value.trim().toLowerCase());
  }

  orderedData(product: Product) {
    const exists = this.orderedItems().find((item) => item.id === product.id);

    if (exists) {
      this.orderedItems.update((items) =>
        items.map((item) =>
          item.id === product.id && (item.quantity ?? 1) < item.availableNum
            ? { ...item, quantity: (item.quantity ?? 1) + 1 }
            : item,
        ),
      );
    } else {
      this.orderedItems.update((items) => [...items, { ...product, quantity: 1 }]);
    }
  }
  onUpdateQuantity(event: { id: number; quantity: number }) {
    this.orderedItems.update((items) =>
      items.map((item) => (item.id === event.id ? { ...item, quantity: event.quantity } : item)),
    );
  }

  onClearOrders() {
    this.orderedItems.set([]);
    this.searchedItem.set('');
    this.searchInput()!.nativeElement.value = '';
  }
}
