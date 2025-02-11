import { Component, OnInit, Inject, PLATFORM_ID  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  experiences: any[] = []; 

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object // Inject PLATFORM_ID
) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.loadExperiences();
    }
  }

  loadExperiences() {
    this.http.get<any[]>('assets/data/experiences-en.json').subscribe(
      (data) => {
        this.experiences = data;
        // console.log('Experiences loaded:', this.experiences);
      },
      (error) => {
        // console.error('Error loading experiences:', error);
      }
    );
  }
}