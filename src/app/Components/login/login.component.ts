import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Services/account.service';
import { User } from 'src/app/Models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm:FormGroup;
  constructor(private builder:FormBuilder,private accountSrv:AccountService,private router:Router){
    // i said to builder to help me to make group of my input amd now i wouid put my controls to you
     this.loginForm=this.builder.group({
      // if i need to edit from i put values in this empty string
      email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
  
     })
    }
  // constructor(private accountSrv:AccountService,private router:Router){

  // }
  loginuser(){
    // last one
    // this.accountSrv.login(this.loginForm.value as User).subscribe({
    this.accountSrv.login(this.loginForm.controls["email"].value,this.loginForm.controls["password"].value).subscribe({
      next:(response)=>{
        console.log(response.data);
        // i can make check
        if(response.success){
          // if true 
          this.accountSrv.setuser(response.data.token,response.data.user.name)

           // go to home page
           this.router.navigateByUrl('/home')
          // console.log(response.message);
          
          alert(response.message)
        }else{
            alert(response.message)
        }
        
      }
    })
  }

}
