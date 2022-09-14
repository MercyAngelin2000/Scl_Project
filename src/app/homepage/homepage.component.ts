import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')==null)
    {
      Swal.fire('You have been Loggedout')
      this.router.navigate(['/']);
    }
  }
  logout(){
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'logout'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Logged out!',
          'Logged out successfully',
          'success'

        )
        localStorage.removeItem('token');
        localStorage.clear();
        this.router.navigate(['/'])
      
      }
     
    });
    
  }
 
 
     

}
