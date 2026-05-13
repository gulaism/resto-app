import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  isActive = input<boolean>(false);
  buttonContent = input<string>('');

  get bgColor() {
    if(this.isActive()) {
      return '#EA7C69';
    } else {
      return 'transparent'
    }
  }

  get borderStyle() {
    if(this.isActive()) {
      return '1px solid transparent';
    } else {
      return '1px solid #393C49';
    }
  }

  get colorStyle() {
    if(this.isActive()) {
      return '#FFFFFF';
    } else {
      return '#EA7C69';
    }
  }
}
