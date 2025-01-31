import { Component } from '@angular/core';
import { FormGroup, Validator, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

loginForm!: FormGroup;

constructor(private fb: FormBuilder){}

ngOnInit(): void{
  this.loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
}

onSubmit(): void{
if(this.loginForm.valid){
  console.log('Login successful', this.loginForm.value);
}else{
  console.log('invalid form ');
      }
    }
}
