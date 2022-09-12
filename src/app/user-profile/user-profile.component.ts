import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SubserviceService } from '../subservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userprofile! : FormGroup
  // id: any;
  data: any;
  constructor(private router:Router, private fb:FormBuilder,private subservice:SubserviceService) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')==null)
    {
      Swal.fire('You have been Loggedout')
      this.router.navigate(['/']);
    }
    this.userprofile=this.fb.group({
      firstname:[''],
      lastname:[''],
      phone:[''],
      email:[''],
      dob:[''],
      gender:['']
    })
    this.subservice.userprofile().subscribe((arg: any) =>{
      this.data=arg;
      console.log(this.data);
      this.loaddata();
    })
  }

  loaddata(){
    this.userprofile=this.fb.group({
      firstname:[this.data.firstname],
      lastname:[this.data.lastname],
      phone:[this.data.phone],
      email:[this.data.email],
      dob:[this.data.dob],
      gender:[this.data.gender]
    })
  }

  onSubmit(){
    if(this.userprofile.valid){
      console.log(this.userprofile.value)
      this.subservice.up_userprofile(this.userprofile.value).subscribe((arg:any) =>{
        // this.router.navigate(['/userprofile'])

      })
    }

  }
  onDelete(){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'logout'
    }).then((result) => {
      if (result.isConfirmed) {
        this.subservice.del_userprofile().subscribe((arg:any) =>{
          this.router.navigate(['/'])
          return false
        })
       
      }
      
    });

  }

}
