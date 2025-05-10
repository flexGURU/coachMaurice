import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  url: string;
  date: string;
  category: string;
  readTime: string;
  author: string;
  authorImage: string;
}

@Component({
  selector: 'app-blog',
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  blogPosts: BlogPost[] = [];

  constructor() {
    this.blogPosts = [
      {
        title: '10 Nutrition Myths Debunked by Science',
        excerpt:
          'Separate fact from fiction with these evidence-based insights about nutrition that might surprise you.',
        image: 'debunked.jpg',
        url: 'https://www.aarp.org/health/healthy-living/nutrition-myths-debunked/',
        date: 'May 15, 2023',
        category: 'Nutrition',
        readTime: '5 min read',
        author: 'Coach Maurice',
        authorImage: '/placeholder.svg?height=100&width=100',
      },
      {
        title: 'How to Build a Sustainable Workout Routine',
        excerpt:
          'Learn how to create a fitness routine that you can maintain long-term without burnout or plateaus.',
        image: 'sustain.jpg',
        url: 'https://www.bphysicaltherapy.com/blog/2024/creating-a-sustainable-exercise-routine.html',
        date: 'April 28, 2023',
        category: 'Fitness',
        readTime: '7 min read',
        author: 'Coach Maurice',
        authorImage: '/placeholder.svg?height=100&width=100',
      },
      {
        title: 'The Psychology of Weight Loss: Mind Over Matter',
        excerpt:
          'Discover the mental aspects of weight loss and how to overcome psychological barriers to success.',
        image: 'loss.png',
        url: 'https://www.truthaboutweight.global/global/en/managing-your-weight/mind-over-matter-using-positive-psychology-for-weight.html#:~:text=Recent%20research%20on%20positive%20psychology,self%2Dimprovement%2C%20not%20punishment.',
        date: 'April 10, 2023',
        category: 'Mindset',
        readTime: '6 min read',
        author: 'Coach Maurice',
        authorImage: '/placeholder.svg?height=100&width=100',
      },
    ];
  }
}
