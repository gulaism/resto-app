import { Component, input, output } from '@angular/core';
import { Product } from '../../services/food';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CurrencyPipe],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  product = input.required<Product>();
  cardClicked = output<Product>();
}
