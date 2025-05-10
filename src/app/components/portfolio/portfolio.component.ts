import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Testimonial {
  name: string;
  image: string;
  quote: string;
  transformation: string;
  duration: string;
}

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  testimonials: Testimonial[] = [];
  constructor() {
    this.testimonials = [
      {
        name: 'Sarah Johnson',
        image: 'client1.jpg',
        quote:
          'This program helped me rediscover my strength and feel confident in my own skin again. Truly life-changing!',
        transformation: 'Lost 30 lbs in 6 months',
        duration: '6-Month Body Reboot',
      },
      {
        name: 'Michael Rodriguez',
        image: 'client2.jpg',
        quote:
          'For the first time, I feel like I understand my body and how to train it effectively. The results speak for themselves.',
        transformation: 'Gained 15 lbs of muscle',
        duration: '4-Month Strength Build',
      },
      {
        name: 'Jennifer Lee',
        image: 'client3.jpg',
        quote:
          'I used to struggle with motivation, but now I look forward to every workout. The accountability was a game changer.',
        transformation: 'Lost 45 lbs in 8 months',
        duration: '8-Month Total Wellness Plan',
      },
      {
        name: 'David Kim',
        image: 'client4.jpg',
        quote:
          'I gained lean muscle, improved my energy, and learned how to eat without guilt. Best investment I’ve ever made.',
        transformation: 'Gained 10 lbs muscle & improved stamina',
        duration: '5-Month Lean Mass Program',
      },
      {
        name: 'Rachel Moore',
        image: 'client5.jpg',
        quote:
          'I’ve never felt this strong and balanced. The mix of workouts and nutrition support was exactly what I needed.',
        transformation: 'Toned up and lost 20 lbs',
        duration: '7-Month Lifestyle Reset',
      },
    ];
  }
}
