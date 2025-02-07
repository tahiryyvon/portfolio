import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarStateService } from '../../services/sidebar-state.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  isCollapsed = false;

  constructor(private sidebarState: SidebarStateService) {
    this.sidebarState.isCollapsed.subscribe(
      (state) => (this.isCollapsed = state)
    );
  }

  toggleSidebar() {
    this.sidebarState.toggle();
  }
}