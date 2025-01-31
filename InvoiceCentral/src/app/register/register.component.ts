import { Component, OnInit } from '@angular/core';
import { FormGroup, Validator, FormBuilder, Validators } from '@angular/forms';
import { RegisterRequestPayload } from './register-request-payload';
import { AuthService } from '../auth/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
registrationForm!: FormGroup;
registerRequestPayload: RegisterRequestPayload;
submitted = false;

constructor(private fb: FormBuilder, private authService: AuthService) {
  this.registerRequestPayload = {
    username: '',
    email: '',
    password: ''
  };
}

ngOnInit(): void {
    this.registrationForm = this.fb.group({
      username:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(0)]],
    });
}

onSubmit(): void {
  this.registerRequestPayload.username = this.registrationForm.get('username')!.value;
  this.registerRequestPayload.email = this.registrationForm.get('email')!.value;
  this.registerRequestPayload.password = this.registrationForm.get('password')!.value;

  this.authService.onSubmit(this.registerRequestPayload).subscribe((data: any) => {console.log(data);});
if(this.registrationForm.valid){
  console.log('Form submitted:', this.registrationForm.value);
    }
  }

}
