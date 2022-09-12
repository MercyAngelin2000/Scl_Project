import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SubserviceService } from '../subservice.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
  loginForm: FormGroup | any;
  
  data: any;
  id: any;
  credential! : FormData ;
  constructor(private router:Router,private subService:SubserviceService) { 
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      pwd: new FormControl('', [Validators.required])
    });
    
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("Success",this.loginForm.value)
    // if(!this.loginForm.valid){
    //   alert("Username & Password is required")
    //  }
    if(this.loginForm.valid ){
      this.credential = new FormData();
      this.credential.append("username",this.loginForm.get('email').value);
      this.credential.append("password",this.loginForm.get('pwd').value);
      this.subService.login(this.credential).subscribe((arg: any) =>{
        this.data= arg;    //arg is just a variable
        console.log(this.data)
        if(this.data.access_token != null){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Sign in Successfully',
            showConfirmButton: false,
            timer: 1500,
            width: 600    
          });
          localStorage.setItem('token',this.data.access_token);
          localStorage.setItem('token_type',this.data.token_type);
          this.router.navigate(['/home'])
        }else{
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Invalid Username or Password',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })

    }
    
    
  }

}
