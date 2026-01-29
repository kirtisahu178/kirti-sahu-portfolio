import { Component, OnInit, ViewChild } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators, FormGroupDirective } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { NgxUiLoaderModule, NgxUiLoaderService } from 'ngx-ui-loader';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  imports: [MaterialModule, FormsModule, ReactiveFormsModule, NgxUiLoaderModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  subjects: string[] = [
    'Job Opportunity',
    'Freelance / Contract Work',
    'Collaboration',
    'Project Discussion',
    'Feedback / Suggestions',
    'General Inquiry'
  ];

  successMessage: string = '';
  errorMessage: string = '';
  @ViewChild(FormGroupDirective) formDirective!: FormGroupDirective;

  constructor(private snackBar: MatSnackBar, private ngxLoader: NgxUiLoaderService) { }

  ngOnInit(): void {
  }

  copyEmail() {
    navigator.clipboard.writeText('kirtisahu178@gmail.com').then(() => {
      this.snackBar.open('Email copied to clipboard', 'Close', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'bottom'
      });
    });
  }



  contactForm = new FormGroup({
    ctrl_txt_name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    ctrl_txt_email: new FormControl('', [Validators.required, Validators.email]),
    ctrl_ddl_subject: new FormControl('', [Validators.required]),
    ctrl_txt_message: new FormControl('', [Validators.required, Validators.minLength(10)])
  });

  submitForm(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      this.snackBar.open(
        'Please fill all required fields correctly before submitting the form.',
        'OK',
        {
          duration: 3000,
          verticalPosition: 'top',
        }
      );
      return;
    }

    this.ngxLoader.start();

    this.successMessage = '';
    this.errorMessage = '';

    emailjs
      .send(
        environment.emailServiceId,
        environment.emailTemplateId,
        this.contactForm.value,
        environment.emailPublicKey
      )
      .then(
        (response: EmailJSResponseStatus) => {
          console.log('SUCCESS!', response.status, response.text);
          this.successMessage = 'Thanks for reaching out! Your message has been sent successfully.';
          this.snackBar.open(
            this.successMessage,
            'Close',
            {
              duration: 30000,
              verticalPosition: 'top',
              horizontalPosition: 'center',
              panelClass: ['snackbar-success']
            }
          );
          this.ngxLoader.stop();
          this.contactForm.reset();
          this.formDirective.resetForm(); // This clears the validators and the red outlines
        },
        (error) => {
          console.error('FAILED...', error);
          this.errorMessage = 'Oops! Something went wrong. Please try again later.';
          this.snackBar.open(
            this.errorMessage,
            'Close',
            {
              duration: 5000,
              verticalPosition: 'top',
              horizontalPosition: 'center',
              panelClass: ['snackbar-error']
            }
          );
          this.ngxLoader.stop();
        }
      );
  }
}
