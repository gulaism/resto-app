import { Component, computed, input, output, signal } from '@angular/core';
import { Input } from '../../../../shared/input/input';
import { SuccessModal } from "../success-modal/success-modal";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.html',
  styleUrl: './payment.css',
  imports: [Input, SuccessModal],
})
export class Payment {
  goBack = output<void>();
  chosenMethod = signal<string>('creditCard');
  chosenOrderType = input<number>(0);
  showSuccessModel = signal<boolean>(false);
  clearOrders = output<void>();

  cardHolder = signal<string>('');
  cardNumber = signal<string>('');
  expiryDate = signal<string>('');
  cvv = signal<string>('');
  tableNo = signal<string>('');

  isFormValid = computed(() => {
    if (this.chosenMethod() !== 'creditCard') return true;
    const base =
      this.cardHolder().trim() !== '' &&
      this.cardNumber().trim() !== '' &&
      this.expiryDate().trim() !== '' &&
      this.cvv().trim() !== '';
    if (this.chosenOrderType() === 0) return base && this.tableNo().trim() !== '';
    return base;
  });

  confirmPayment() {
    
    if (!this.isFormValid()) {
      alert('Please complete all fields');
      return;
    }
    this.showSuccessModel.set(true);
  }

  onSuccessClose() {
    this.clearOrders.emit();
    this.goBack.emit();
  }
}
