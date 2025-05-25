import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-challenges',
  imports: [CommonModule],
  templateUrl: './challenges.component.html',
  styleUrl: './challenges.component.css',
})
export class ChallengesComponent {
  experiences = [
    {
      title: 'Personalized Fitness Journey',
      description: 'A complete mind-body transformation experience',
      icon: 'fas fa-dumbbell',
      highlights: [
        'Custom movement plans',
        'Energy level improvements',
        'Newfound strength',
        'Mind-body connection',
      ],
      longDescription:
        'This is where your relationship with your body transforms...',
      journeyPhases: [
        {
          step: 1,
          title: 'Discovery',
          description: 'We learn how your body moves...',
        },
        {
          step: 2,
          title: 'Foundation',
          description: 'Building fundamental strength...',
        },
      ],
      testimonials: [
        {
          initials: 'JD',
          name: 'Jamie D.',
          role: 'Yoga Teacher',
          quote: 'I discovered muscles I never knew I had...',
        },
      ],
      weeklyActivities: [
        { day: 'Monday', description: 'Functional movement assessment' },
        { day: 'Wednesday', description: 'Energy-boosting cardio session' },
      ],
    },
    // ...other experiences
  ];
  challenges = [
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
      cta: 'Start Your Transformation',
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
      cta: 'Join Elite Program',
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
      cta: 'Master Your Nutrition',
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
      cta: 'Enhance Workplace Wellness',
    },
  ];

  currentChallenge = this.challenges[0]; // Default selected challenge
}
