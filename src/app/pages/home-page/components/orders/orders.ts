import { Component, signal } from '@angular/core';
import { Button } from "../../../../shared/button/button";

@Component({
  selector: 'app-orders',
  imports: [Button],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class Orders {
  activeIndex = signal<number>(0);

  setActiveOption(index: number) {
    this.activeIndex.set(index);
  }
}
