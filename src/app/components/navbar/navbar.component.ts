import { CommonModule, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  quickLinks = [
    { name: 'About', value: 'about' },
    { name: 'Services', value: 'services' },
    { name: 'Portfolio', value: 'portfolio' },
    { name: 'Blog', value: 'blog' },
    { name: 'Contact', value: 'contact' },
  ];

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  constructor(private viewportScroller: ViewportScroller) {}

  scrollTo(anchor: string) {
    this.viewportScroller.scrollToAnchor(anchor);
  }
}
