import { Component, input, output } from '@angular/core';
import { Product } from '../../services/food';
import { CurrencyPipe } from '@angular/common';
import { ImageSrcPipe } from '../pipes/image-src-pipe';

@Component({
  selector: 'app-card',
  imports: [CurrencyPipe, ImageSrcPipe],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  product = input.required<Product>();
  cardClicked = output<Product>();
}
