import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  services = [
    {
      title: 'Personalized Fitness Program',
      description:
        'A comprehensive fitness solution designed specifically for your body type, goals, and lifestyle.',
      icon: 'fas fa-dumbbell',
      features: [
        'Customized workout routines',
        'Personalized nutrition plan',
        'Weekly adjustments based on progress',
        'Video form checks and feedback',
        'Supplement recommendations',
      ],
    },
    {
      title: 'Elite Transformation Package',
      description:
        'The ultimate all-inclusive program for those serious about achieving dramatic results.',
      icon: 'fas fa-bolt',
      features: [
        'Everything in the Personalized Program',
        'Priority 24/7 coaching support',
        'Bi-weekly video consultations',
        'Advanced body composition analysis',
        'Stress management & sleep optimization',
      ],
    },
    {
      title: 'Nutrition Mastery Program',
      description:
        'Learn how to fuel your body optimally with a focus on sustainable nutrition habits.',
      icon: 'fas fa-apple-alt',
      features: [
        'Personalized meal planning',
        'Grocery shopping guides',
        'Meal prep strategies',
        'Restaurant eating protocols',
        'Nutrition education modules',
      ],
    },
    {
      title: 'Corporate Wellness Program',
      description:
        'Boost productivity and employee satisfaction with customized workplace wellness solutions.',
      icon: 'fas fa-briefcase-medical',
      features: [
        'Group fitness sessions',
        'Wellness workshops',
        'Health risk assessments',
        'Team challenges and incentives',
        'Executive one-on-one coaching',
      ],
    },
  ];
}
