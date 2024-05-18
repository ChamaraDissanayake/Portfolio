import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './features/about/about.component';
import { NavbarComponent } from './features/navbar/navbar.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
      CommonModule, 
      RouterOutlet, 
      AboutComponent,
      NavbarComponent
    ]
})
export class AppComponent {
  title = 'Portfolio';
}
