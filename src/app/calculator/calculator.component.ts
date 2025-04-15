import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  display = '';
  // buttons = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '+'];
  buttons = ['1', '2', '3', '/', '4', '5', '6', '*', '7', '8', '9', '-', '0', '.', '+'];
  press(value: string) {
    this.display += value;
  }

  clear() {
    this.display = '';
  }

  calculate() {
    try {
      this.display = eval(this.display);
    } catch {
      this.display = 'Error';
    }
  }
}
