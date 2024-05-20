import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { scrollToElementById } from '../../shared/utils/common-functions/scroll-function';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  @ViewChild('navbarNav') navbarNav!: ElementRef;

  sections = [
    { id: 'home', buttonId: 'btn-home' },
    { id: 'about', buttonId: 'btn-about' },
    { id: 'projects', buttonId: 'btn-projects' },
    { id: 'work', buttonId: 'btn-work' },
    { id: 'resume', buttonId: 'btn-resume' }
  ];

  constructor(){}

  ngOnInit(): void {
    this.setActive(this.sections[0].buttonId)
  }

  collapseNavbar() {
    const navbarNavElement = this.navbarNav.nativeElement;
    if (navbarNavElement.classList.contains('show')) {
      // If the navbar is expanded, collapse it
      navbarNavElement.classList.remove('show');
    }
  }
  
  activate(id: string){
    this.collapseNavbar();
    scrollToElementById(id);
  }

  setActive(id: string) {
    // Remove 'active' class from all elements with class 'nav-link'
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.classList.remove('active');
      link.setAttribute('aria-current', 'false'); // Set aria-current to false for all links
    });

    // Add 'active' class and set aria-current to 'page' for the element with the specified id
    const element = document.getElementById(id);
    if (element) {
      element.classList.add('active');
      element.setAttribute('aria-current', 'page');
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const sections = this.sections.map(section => {
      const element = document.getElementById(section.id);
      const rect = element?.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      let visibleArea = 0;

      if (rect) {
        if (rect.top >= 0 && rect.bottom <= viewportHeight) {
          // Entire section is in viewport
          visibleArea = rect.height;
        } else if (rect.top < 0 && rect.bottom > 0) {
          // Top part of section is out of viewport
          visibleArea = rect.bottom;
        } else if (rect.top >= 0 && rect.top < viewportHeight) {
          // Bottom part of section is out of viewport
          visibleArea = viewportHeight - rect.top;
        }
      }

      return {
        ...section,
        visibleArea
      };
    });

    // Find the section with the largest visible area
    const mostVisibleSection: any = sections.reduce((max, section) =>
      section.visibleArea > max.visibleArea ? section : max, { visibleArea: 0 }
    );
    
    this.setActive(mostVisibleSection.buttonId);
  }
}
