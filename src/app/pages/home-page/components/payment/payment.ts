import { Component, output, signal } from '@angular/core';
import { Orders } from "../orders/orders";
import { Input } from "../../../../shared/input/input";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.html',
  styleUrl: './payment.css',
  imports: [Input],
})
export class Payment {
  goBack = output<void>();
  chosenMethod = signal<string>('creditCard');
}
