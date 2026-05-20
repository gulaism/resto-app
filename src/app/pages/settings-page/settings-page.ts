import { Component } from '@angular/core';
import { SettingsLayout } from "./components/settings-layout/settings-layout";
import { ProductManagement } from "./components/product-management/product-management";

@Component({
  selector: 'app-settings-page',
  imports: [SettingsLayout, ProductManagement],
  templateUrl: './settings-page.html',
  styleUrl: './settings-page.css',
})
export class SettingsPage {}
