import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class Input {
  maxLength = input<number>(500);
  inputType = input<string>('text');
  placeholder = input<string>('');
  value = input<string>('');
  isCardInput = input<boolean>(false);
  isExpiryInput = input<boolean>(false);
  isCvvInput = input<boolean>(false);

  valueChange = output<string>();

  onInput(event: Event) {
    this.formatCardNumber(event);
    this.formatExpiry(event);
    this.formatCvv(event);
    const value = (event.target as HTMLInputElement).value;
    this.valueChange.emit(value);
  }

  formatCardNumber(event: Event) {
    if(!this.isCardInput()) return;
    let value = (event.target as HTMLInputElement).value;
    value = value.replace(/\s/g, '').replace(/\D/g, '');
    value = value.match(/.{1,4}/g)?.join(' ') ?? value;
    (event.target as HTMLInputElement).value = value;
  }

  formatExpiry(event: Event) {
    if(!this.isExpiryInput()) return;
    let value = (event.target as HTMLInputElement).value;
    value = value.replace(/\D/g, '');
    if(value.length >= 2) {
      value = value.slice(0, 2) + '/' + value.slice(2, 4);
    }
    (event.target as HTMLInputElement).value = value;
  }

  formatCvv(event: Event) {
    if(!this.isCvvInput()) return;
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');
    value = value.slice(0, 3);
    input.value = value;
    
  }
}
