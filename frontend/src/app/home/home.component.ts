import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';

// import custom validator to validate that password and confirm password fields match

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  registerForm: FormGroup;
  submitted = false;
  myData: Object;

  constructor(private formBuilder: FormBuilder, private service : ServiceService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      class: ['', Validators.required],
      subject: ['male', [Validators.required]],
      marks :  ['', Validators.required],


  });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      this.service.create(this.registerForm.value).subscribe(data =>{
        this.myData = data;
      console.log(this.myData)
      });
      this.registerForm.reset();
 
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }
}

