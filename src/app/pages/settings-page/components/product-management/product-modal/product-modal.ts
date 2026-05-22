import { Component, inject, input, output, signal } from '@angular/core';
import { Food } from '../../../../../services/food';

@Component({
  selector: 'app-product-modal',
  imports: [],
  templateUrl: './product-modal.html',
  styleUrl: './product-modal.css',
})
export class ProductModal {
  isOpen = input<boolean>(false);
  closed = output<void>();
  selectedFile = signal<File|null>(null);
  fileError = signal<string|null>(null);
  formError = signal<string|null>(null);

  itemName = signal<string>('');
  itemPrice = signal<number|null>(null);
  itemStock = signal<number|null>(null);
  itemCategory = signal<string|null>(null);

  private foodService = inject(Food);

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if(!input.files?.length) return;

    const file = input.files[0];
    const allowed = ['image/jpeg', 'image/png'];

    if(!allowed.includes(file.type)) {
      this.selectedFile.set(null);
      input.value = '';
      this.fileError.set('Only JPG and PNG files are accepted.');
      return;
    }

    this.fileError.set(null);
    this.selectedFile.set(file);
  }

  onSave() {
    if(!this.selectedFile()) {
      this.formError.set('Please upload a product image.')
      return;
    }
    if(!this.itemName().trim()) {
      this.formError.set('Please enter an item name');
      return;
    }
    if(this.itemPrice() === null || this.itemPrice()! <= 0) {
      this.formError.set('Please enter a valid price.');
      return;
    }
    if(this.itemStock() === null || this.itemStock()! < 0) {
      this.formError.set('Please enter a valid stock number.');
      return;
    }
    if(!this.itemCategory()) {
      this.formError.set('Please select a category');
      return;
    }

    this.formError.set(null);
    
    this.foodService.addProduct({
      image: this.selectedFile()!.name,
      name: this.itemName().trim(),
      price: this.itemPrice()!,
      availableNum: this.itemStock()!,
      category: this.itemCategory()!,
    });

    this.resetForm();
    this.close();

  }

  onStockInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = parseInt(input.value);
    if(value < 1 || isNaN(value)) {
      input.value = '1';
      this.itemStock.set(1);
    } else {
      this.itemStock.set(value);
    }
  }

  resetForm() {
    this.selectedFile.set(null);
    this.itemName.set('');
    this.itemPrice.set(null);
    this.itemStock.set(null);
    this.formError.set(null);
    this.fileError.set(null);
    this.itemCategory.set(null);
  }

  close() {
    this.resetForm();
    this.closed.emit();
  }
}
