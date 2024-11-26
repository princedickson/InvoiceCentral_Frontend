import { Component, OnInit } from '@angular/core';
import { FormGroup, Validator, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
registrationForm!: FormGroup;
submitted = false;

constructor(private fb: FormBuilder){
}

ngOnInit(): void {
    this.registrationForm = this.fb.group({
      username:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(0)]],
    });
}

onSubmit(): void {
if(this.registrationForm.valid){
  console.log('Form submitted:', this.registrationForm.value);
    }
  }

}
