// src/app/services/sidebar-state.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarStateService {
  private collapsed = new BehaviorSubject<boolean>(false);
  isCollapsed = this.collapsed.asObservable();

  toggle() {
    this.collapsed.next(!this.collapsed.value);
  }

  setCollapsed(value: boolean) {
    this.collapsed.next(value);
  }
}