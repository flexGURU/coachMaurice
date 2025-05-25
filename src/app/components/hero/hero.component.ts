import { Component } from '@angular/core';
import { VideoIntroComponent } from '../video-intro/video-intro.component';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../../utils/spinner/spinner.component';

@Component({
  selector: 'app-hero',
  imports: [VideoIntroComponent, CommonModule, SpinnerComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  showModal = true;
  showSpinner = true;
  showVideo = false;
  img!: string;
  constructor() {
    this.img = '/hero.jpg';
  }

  ngOnInit() {
    // Simulate video loading time
    setTimeout(() => {
      this.showSpinner = false;
      this.showVideo = true;
    }, 3000); // Adjust loading time as needed
  }

  onVideoLoaded() {
    this.showSpinner = false;
    this.showVideo = true;
  }

  onVideoEnded() {
    // Video ended, user can now click outside to close
  }

  closeModal() {
    this.showModal = false;
  }

  onModalBackdropClick(event: Event) {
    // Close modal only if clicking on the backdrop (not on the modal content)
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }
}
