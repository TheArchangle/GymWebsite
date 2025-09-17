import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  standalone: true
})
export class Contact {
  messageSent = false;

  onSubmit() {
    this.messageSent = true;
    setTimeout(() => {
      this.messageSent = false;
    }, 4000);
  }
}
