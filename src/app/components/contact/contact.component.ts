import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

declare global {
  interface Window {
    IN: any;
  }
}

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
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  onSubmit() {
    // Implement email sending functionality
    console.log('Contact Form Submitted', this.formData);
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // This code will only run in the browser
      if (typeof (window as any).IN !== 'undefined') {
        // Initialize the LinkedIn badge
        (window as any).IN.parse();
      }
    }
  }
}