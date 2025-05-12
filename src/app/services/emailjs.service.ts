import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../environments/environment.development';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root',
})
export class EmailjsService {
  constructor(private toastr: ToastrService) {}
  async sendEmail(contactDetails: FormGroup) {
    try {
      emailjs.init(environment.emailjsconfig.publicKey);
      let response = await emailjs.send(
        environment.emailjsconfig.serviceId,
        environment.emailjsconfig.templateId,
        {
          from_name: contactDetails.value.from_name,
          from_email: contactDetails.value.from_email,
          message: contactDetails.value.message,
          to_email: environment.emailjsconfig.emailAddress,
          user_email: contactDetails.value.from_name,
          phone: contactDetails.value.phone,
        }
      );

      contactDetails.reset();
      this.toastr.success('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
      this.toastr.error('Oops. System is Tweaking');
    }
  }
}
