import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  // Angular 官方文件 //
  name = new FormControl('');

  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  // });

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    aliases: this.fb.array([this.fb.control('')]),
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.warn(this.profileForm.value);
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }
  // Angular 官方文件 //

  // account = '';
  // password = '';
  // accountErrorMessage = '';
  // passwordErrorMessage = '';

  // invalid = this.fb.group({
  //   account: ['', Validators.required],
  //   password: [
  //     '',
  //     Validators.compose([
  //       Validators.required,
  //       Validators.pattern('(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}')
  //     ])
  //   ],
  // });
  // get account() { return this.invalid.get('account'); }

  // accountValueChange(account: string, errors: ValidationErrors): void {
  //   this.account = account;
  //   this.validationCheck(errors, 'account');
  // }

  // account = "text@email.com";
  // password = "12345678";

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(10)
  ]);
}
