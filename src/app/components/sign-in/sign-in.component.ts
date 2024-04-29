import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{
  // signInForm = new FormGroup({
  //   username: new FormControl(""),
  //   password: new FormControl(""),
  //   rememberMe: new FormControl(false)
  // })
  signInForm = this.fb.group({
    username: "",
    password: "",
    rememberMe: false
  })
  constructor( private fb: FormBuilder){}
  ngOnInit(): void {
    this.signInForm.controls.username.setValue("Quangdz");

    this.signInForm.setValue({
      username: "Quang1",
      password: "1223",
      rememberMe: true
    })

    this.signInForm.patchValue({
      password: "122"
    })
  }

  onSubmit(){
    console.log("controls::",this.signInForm.controls.username);
    
    console.log(this.signInForm)
  }
}
