import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Review {
  name: string;
  rating: number;
  text: string;
  date: string;
  position?: string;
}

@Component({
  selector: 'app-reviews',
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css',
})
export class ReviewsComponent {
  featuredReviews: Review[] = [];
 
  constructor() {
    this.featuredReviews = [
      {
        name: 'Nganga John',
        rating: 5,
        text: "This program pushed me beyond my limits. I’ve never felt this strong and energetic. The structured support kept me consistent, even on the tough days.",
        date: 'Client for 9 months',
        position: 'Lost 28 lbs and gained endurance',
      },
      {
        name: 'Diana Bahati',
        rating: 5,
        text: "Balancing motherhood and fitness seemed impossible until now. The workouts were realistic, the support was incredible, and the meal plans were family-friendly.",
        date: 'Client for 1 year',
        position: 'Lost 35 lbs and built core strength',
      },
      {
        name: 'Zelha Fitness Juja',
        rating: 5,
        text: "I run a local fitness group, and this program helped me level up both personally and professionally. I saw muscle gains and improved my group training knowledge.",
        date: 'Client for 6 months',
        position: 'Gained 10 lbs muscle and boosted mobility',
      },
    ];
  }
}
