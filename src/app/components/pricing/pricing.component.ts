import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface PricingPlan {
  title: string;
  price: string;
  currency: string;
  description: string;
  features: string[];
  popular?: boolean;
  badge?: string;
}

@Component({
  selector: 'app-pricing',
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css',
})
export class PricingComponent {
  pricingPlans: PricingPlan[] = [
    {
      title: '8 Weeks Shred',
      price: '3999',
      currency: 'Kshs',
      description:
        'Perfect for those looking to quickly shed stubborn body fat and get in shape.',
      features: [
        'Personalized workout plan',
        'Nutrition guidelines',
        'Weekly check-ins',
        'Progress tracking',
        'Access to fitness app',
        'Email support',
      ],
    },
    {
      title: 'Belly Fat Nutrition Plan',
      price: '4500',
      currency: 'Kshs',
      description:
        'Specialized nutrition plan focused on eliminating stubborn belly fat for good.',
      features: [
        'Customized meal plans',
        'Grocery shopping lists',
        'Supplement recommendations',
        'Metabolic assessment',
        'Digestive health guidance',
        'Bi-weekly adjustments',
      ],
      popular: true,
      badge: 'Best Value',
    },
    {
      title: '12 Weeks Fat Loss Challenge',
      price: '4999',
      currency: 'Kshs',
      description:
        'Our most comprehensive program for total body transformation and long-term results.',
      features: [
        'Complete workout program',
        'Comprehensive nutrition plan',
        'Weekly coaching calls',
        'Body composition analysis',
        'Community support group',
        'Lifetime access to materials',
      ],
    },
  ];
}
