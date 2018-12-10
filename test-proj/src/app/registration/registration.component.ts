import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationService } from '../registration.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})   
export class RegistrationComponent implements OnInit {

  constructor(private fb: FormBuilder, private registrationService: RegistrationService, private toastr: ToastrService) { }

  get username()
  {
    return this.registrationForm.get('username');
  }

  registrationForm = this.fb.group({
    username: ['epiconrad',[Validators.required, Validators.minLength(5)]],
    password: [''],
    confirmPassword: ['']
  });

  /* without form builder
  registrationForm = new FormGroup({
      username: new FormControl('epiconrad'),
      password: new FormControl(''),
      confirmPassword: new FormControl('')
  });
  */

  loadApiData()
  {
    this.registrationForm.patchValue({
      username: 'testuser',
      password: 'test123',
    });
  }
  /*set value
  loadApiData()
  {
    this.registrationForm.setValue({
      username: 'testuser',
      password: 'test123',
      confirmPassword: 'test123'
    });
  }*/
  onSubmit()
  {
       console.log(this.registrationForm.value)
       this.registrationService.register(this.registrationForm.value)
          .subscribe(
            response => console.log('Success', response),
            error => console.error('Error!',error)
          );
       this.toastr.success('Registered Successfully','Registration');
  }

  ngOnInit() {
  }

}
