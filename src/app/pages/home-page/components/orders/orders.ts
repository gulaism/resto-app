import { Component, signal } from '@angular/core';
import { Button } from "../../../../shared/button/button";
import { CurrencyPipe } from '@angular/common';
import { Input } from "../../../../shared/input/input";

@Component({
  selector: 'app-orders',
  imports: [Button, CurrencyPipe, Input],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class Orders {
  activeIndex = signal<number>(0);

  setActiveOption(index: number) {
    this.activeIndex.set(index);
  }
}
