import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { User } from 'src/app/shared/models/user.model';
import { UsersService } from 'src/app/shared/services/user.services';

@Component({
  selector: 'wfm-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private usersService: UsersService,
    private router: Router,
    private title: Title,
  ) {
    title.setTitle('Реєстрація');
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(
        null,
        [Validators.required, Validators.email],
        this.forbiddenEmail.bind(this)
      ),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      name: new FormControl(null, [Validators.required]),
      agree: new FormControl(false, [Validators.requiredTrue]),
    });
  }

  onSubmit() {
    const { email, password, name } = this.form.value;
    const user = new User(email, password, name);
    
    console.log(this.form.value)

    this.usersService.createNewUser(user).subscribe(() => {
      this.router.navigate(['/login'], {
        queryParams: {
          nowCanLogin: true,
        },
      });
    });
  }

  forbiddenEmail(control: AbstractControl): Promise<any> {
    return new Promise((resolve, reject) => {
      this.usersService
        .getUserByEmail(control.value)
        .subscribe((user: User | undefined) => {
          if (user) {
            resolve({ forbiddenEmail: true });
          } else {
            resolve(null);
          }
        });
    });
  }
}
