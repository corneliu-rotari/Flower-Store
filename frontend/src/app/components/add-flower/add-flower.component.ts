import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-flower',
  templateUrl: './add-flower.component.html',
  styleUrls: ['./add-flower.component.scss']
})
export class AddFlowerComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      flower_name: '',
      color: '',
      flower_image: '',
      price: 0
    });
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      flower_name: '',
      color: '',
      flower_image: '',
      price: 0
    });
  }

  submit(): void {
    console.log(this.form.getRawValue());
    this.http.post('http://localhost:3000/store/addFlower', this.form.getRawValue())
      .subscribe(() => this.router.navigate(['store']));
  }

}
