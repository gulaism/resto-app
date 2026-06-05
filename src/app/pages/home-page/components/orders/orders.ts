import { Component, computed, input, output, signal } from '@angular/core';
import { Button } from '../../../../shared/button/button';
import { CurrencyPipe } from '@angular/common';
import { Input } from '../../../../shared/input/input';
import { Product, Products } from '../../../../services/food';
import { Payment } from "../payment/payment";

@Component({
  selector: 'app-orders',
  imports: [Button, CurrencyPipe, Input, Payment],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class Orders {
  activeIndex = signal<number>(0);
  orderedItems = input<Products>([]);
  updateQuantity = output<{id: number; quantity: number}>();
  fees = [0, 1, 5]; 
  removeItem = output<number>();

  isConfirmed = signal<boolean>(false);

  clearOrders = output<void>();

  clearAllOrders() {
    this.clearOrders.emit();
    this.isConfirmed.set(false);
  }


  onQtyChange(event: Event, item: Product) {
    let value = +(event.target as HTMLInputElement).value;
    if(value > item.availableNum) {
      value = item.availableNum;
      (event.target as HTMLInputElement).value = String(item.availableNum); 
    }
    this.updateQuantity.emit({id: item.id, quantity: value});
  }

  subTotal = computed(() =>
    this.orderedItems().reduce((sum, item) => sum + item.price * (item.quantity ?? 1), 0),
  );

  total = computed(() => this.subTotal() + this.fees[this.activeIndex()])

  setActiveOption(index: number) {
    this.activeIndex.set(index);
    
  }
}
