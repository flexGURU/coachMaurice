import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmailjsService } from '../../services/emailjs.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactForm!: FormGroup;
  personalInfo = {
    email: 'mutwirimaurice690&#64;gmail.com',
    phone: '+254 17625495',
    socials: [
      {
        name: 'insta',
        platform:
          'https://www.instagram.com/coach.maurice?igsh=MXEweDk1YjRvYTZjNQ==',
        icon: 'fa-brands fa-instagram',
      },
      {
        name: 'tiktok',
        tiktok: 'https://www.tiktok.com/@coach.maurice2?_t=ZM-8wEehH9B1LJ&_r=1',
        icon: 'fa-brands fa-tiktok',
      },
      {
        name: 'x',
        tiktok: 'https://x.com/mutwiri_maurice?t=lkZCIUdYUDYzl2DiteO1DQ&s=09',
        icon: 'fa-brands fa-x-twitter',
      },
    ],
  };

  constructor(private emailjs: EmailjsService) {
    this.contactForm = new FormGroup({
      from_name: new FormControl('', [Validators.required]),
      from_email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl(''),
      goal: new FormControl(''),
      message: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  goals = [
    'Weight Loss',
    'Muscle Gain',
    'Strength & Performance',
    'General Health',
    'Other',
  ];

  onSubmit() {
    console.log('details', this.contactForm.getRawValue());

    this.emailjs.sendEmail(this.contactForm);
  }
}
