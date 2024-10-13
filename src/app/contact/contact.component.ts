import { Component } from '@angular/core';
import {FormBuilder, FormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ToastrModule, ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  constructor(private http: HttpClient, private toast: ToastrService, private router: Router) {}

  sendEmail(event: Event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData();
    formData.append('name', this.name);
    formData.append('email', this.email);
    formData.append('message', this.message);

    this.http.post('https://formspree.io/f/mvgoozvj', formData).subscribe(
      response => {
        this.toast.success("Email sent successfully.","", {timeOut: 1000});
        this.router.navigate([''])
      },
      error => {
        this.toast.error("Error occurred.", "", {timeOut: 1000});
      }
    );
  }
}
