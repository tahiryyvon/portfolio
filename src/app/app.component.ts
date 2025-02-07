import { Component } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { fadeAnimation } from './animations';
import { SidebarStateService } from './services/sidebar-state.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent],
  templateUrl: './app.component.html',
  animations: [fadeAnimation],
})
export class AppComponent {
  isCollapsed = false;

  constructor(private sidebarState: SidebarStateService) {
    this.sidebarState.isCollapsed.subscribe(
      (state) => (this.isCollapsed = state)
    );
  }
}