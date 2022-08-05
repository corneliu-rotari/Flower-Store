import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      username: '',
      email: '',
      password: ''
    });
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: '',
      email: '',
      password: ''
    });
    }

  submit(): void {
    console.log(this.form.getRawValue());
    this.http.post('http://localhost:3000/user', this.form.getRawValue())
      .subscribe(() => this.router.navigate(['/login']));
  }
}
