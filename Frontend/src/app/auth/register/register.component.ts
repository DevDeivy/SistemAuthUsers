import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RegisterUserService } from '../../services/register-user.service';
import { User } from '../../entities/User';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  public user?: User;
  public letter: RegExp = /^[a-z]$/; 
  public letterToUppercase: RegExp = /^[A-Z]$/;
  public number: RegExp = /^[0-9]$/;
  public simbols: RegExp = /^[[^a-zA-Z0-9\s]$/
  public registered: boolean = false;
  private _registerUser = inject(RegisterUserService);

  register = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'), Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.[A-Z])(?=.[a-z])(?=.*\\d).{8,}$')]),
    name: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    confirm: new FormControl('', Validators.required)
  });


  confirmPassword(){
    return this.register.get('password')?.value !== this.register.get('confirm')?.value;
  }

  registerUserNew(){
    
  }
}
