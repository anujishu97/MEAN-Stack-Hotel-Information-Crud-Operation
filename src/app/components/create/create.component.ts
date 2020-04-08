import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HotelService } from '../../hotel.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  angForm: FormGroup;

  constructor(private hotelservice: HotelService,private fb: FormBuilder,private router: Router,private route: ActivatedRoute) {
    this.createForm();
   }

   createForm(){
     this.angForm=this.fb.group({
       c_name: ['', Validators.required],
       c_emailid: ['', Validators.required],
       c_address: ['', Validators.required],
       occupation: ['', Validators.required],
       c_mobileno: ['', Validators.required],
       numbers_of_adult: ['', Validators.required],
       numbers_of_child:[''],
       room_no: ['', Validators.required]
     });
    }
  

    addUser(c_name, c_emailid, c_address, occupation, c_mobileno, numbers_of_adult, numbers_of_child, room_no){
      this.route.params.subscribe(params=>{
        this.hotelservice.addUser(c_name, c_emailid, c_address, occupation, c_mobileno, numbers_of_adult, numbers_of_child, room_no);
        this.router.navigate(['index']);
      });
    }

      ngOnInit() {

      }
}
