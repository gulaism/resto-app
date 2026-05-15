import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Food, Products } from './services/food';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Sidebar } from "./layouts/sidebar/sidebar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('resto-app');
}
