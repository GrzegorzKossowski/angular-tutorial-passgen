import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  length = 0;
  password = '';
  passElements = {
    letters: false,
    numbers: false,
    symbols: false,
  };

  handleInput({ target }: Event) {
    const { value } = target as HTMLInputElement;
    if (!isNaN(+value)) {
      this.length = parseInt(value);
    }
  }

  handleCheckbox({ target }: Event) {
    const { value, name, checked } = target as HTMLInputElement;
    this.passElements = {
      ...this.passElements,
      [name]: checked,
    };
    console.log(this.passElements);
  }

  onButtonClick() {
    this.password = ''
    const numbers = '0123456789';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if (this.passElements.letters) validChars += letters;
    if (this.passElements.numbers) validChars += numbers;
    if (this.passElements.symbols) validChars += symbols;

    for (let i = 0; i < this.length; i++) {
      this.password+= validChars[Math.floor(Math.random() * validChars.length)];      
    }
  }
  someTruthy() {
    return Object.values(this.passElements).some(Boolean)
  }
}
