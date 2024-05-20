import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './features/about/about.component';
import { NavbarComponent } from './features/navbar/navbar.component';
import { HomeComponent } from './features/home/home.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { WorkComponent } from './features/work/work.component';
import { ResumeComponent } from './features/resume/resume.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    CommonModule, 
    RouterOutlet, 
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    WorkComponent,
    ResumeComponent
  ]
})
export class AppComponent {
  @ViewChild('navbar') navbar!: ElementRef;
  @ViewChild('content') content!: ElementRef;

  constructor() {}

}
