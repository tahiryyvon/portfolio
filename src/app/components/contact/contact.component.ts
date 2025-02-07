import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-contact',
  standalone: true, // Ensure this is set since we're using standalone components
  imports: [FormsModule], // Add FormsModule to imports
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  onSubmit() {
    // Implement your form submission logic here
    alert('Form submitted!');
  }
}