import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { Project } from '../../interfaces/project.interface'; // Adjust the path as needed

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'School and Staff Management Application',
      image: 'assets/images/school-management.jpg',
      description: 'An application to manage all aspects of a school.',
      details: 'Detailed information about this project...',
    },
    {
      title: '3D Virtual Tour Website',
      image: 'assets/images/virtual-tour.jpg',
      description: 'Website with 3D virtual tours.',
      details: 'Detailed information about this project...',
    },
    // Add your other projects
  ];

  constructor(private dialog: MatDialog) {}

  openProject(project: { title: string; image: string; description: string; details: string }) {
    this.dialog.open(ProjectDetailComponent, {
      data: project,
      width: '80%',
      maxHeight: '80vh',
    });
  }
}