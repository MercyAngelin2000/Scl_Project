import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubserviceService } from '../subservice.service';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.scss']
})
export class RegisterpageComponent implements OnInit {
  registerForm : FormGroup | any 
  data: any;
  id: any;
  arg: any;

  constructor(private router:Router,private subService:SubserviceService) { 
    this.registerForm = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      pwd : new FormControl('',[Validators.required]),
    }); 
  }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log("Success",this.registerForm.value)
   
    if(this.registerForm.valid){
      this.subService.register(this.registerForm.value).subscribe((arg: any) =>{
        // data= arg;    //arg is just a variable
        console.log(arg)
        this.arg = arg.Data;
        if(this.arg!=null){
          alert("Register Successfully...Email ID is your Username and Password will be what you entered ")
          this.router.navigate(['/'])
        }
        else{
          alert("Email Id Already Exist")
        }
      
    }
    
  );}


  }

}
