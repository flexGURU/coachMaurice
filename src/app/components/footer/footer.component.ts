import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { globalSocials } from '../../utils/socials';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  socials = globalSocials;
  icon = 'fa-solid fa-greater-than';

  quickLinks = [
    { name: 'About', value: 'about' },
    { name: 'Services', value: 'services' },
    { name: 'Portfolio', value: 'portfolio' },
    { name: 'Blog', value: 'blog' },
    { name: 'Contact', value: 'contact' },
  ];
}
