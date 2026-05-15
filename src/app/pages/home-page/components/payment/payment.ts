import { Component, output, signal } from '@angular/core';
import { Orders } from "../orders/orders";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.html',
  styleUrl: './payment.css',
})
export class Payment {
  goBack = output<void>();
}
