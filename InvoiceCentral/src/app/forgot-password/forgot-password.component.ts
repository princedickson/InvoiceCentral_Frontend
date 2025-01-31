import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  forgotPasswordForm!: FormGroup;
  submitted: boolean= false;

constructor(private formBuilder: FormBuilder){

}
ngOnInit(): void{
  this.forgotPasswordForm = this.formBuilder.group({
    email:['', [Validators.required, Validators.email]],
  });
}

onSubmit(): void {
  this.submitted = true;
  if(this.forgotPasswordForm.invalid){
    return;
  }
  const email = this.forgotPasswordForm.value.email;
  console.log('Reset password link will be sent to: ${email}');
  alert('A reset password link has been sent to your emil.')
}


}
