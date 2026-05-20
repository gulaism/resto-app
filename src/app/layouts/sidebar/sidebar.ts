import { Component, signal } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
  imports: [RouterLink],
})
export class Sidebar {
  activeLink = signal<string>('home');
}
