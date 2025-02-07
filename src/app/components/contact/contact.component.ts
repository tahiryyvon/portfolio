import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  formData  = {
    email: '',
    subject: '',
    message: '',
  };

  onSubmit() {
    // Implement email sending functionality
    console.log('Contact Form Submitted', this.formData);
  }
}