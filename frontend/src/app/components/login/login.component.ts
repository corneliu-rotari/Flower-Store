import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as moment from 'moment';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      username: '',
      password: '',
    });
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: '',
      password: '',
    });
  }
  submit(): void {
    this.http
      .post<any>('http://localhost:3000/user/login', this.form.getRawValue())
      .subscribe(
        (data) => {
          const expiresAt = moment().add(data.expiresIn, 'second');

          localStorage.setItem('id_token', data.idToken);
          localStorage.setItem('user_id', data.user_id);
          localStorage.setItem(
            'expires_at',
            JSON.stringify(expiresAt.valueOf())
          );
          this.router.navigate(['']);
        },
        () => this.router.navigate(['login'])
      );
  }
}
