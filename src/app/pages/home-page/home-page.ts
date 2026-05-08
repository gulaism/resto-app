import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home-page',
  imports: [DatePipe],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  today: number = Date.now();
}
