import { Component, output } from '@angular/core';

@Component({
  selector: 'app-success-modal',
  imports: [],
  templateUrl: './success-modal.html',
  styleUrl: './success-modal.css',
})
export class SuccessModal {
  close = output<void>();

}
