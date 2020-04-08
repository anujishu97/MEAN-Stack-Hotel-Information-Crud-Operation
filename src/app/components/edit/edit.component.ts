import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Customer } from '../index/customer';
import {HotelService} from '../../hotel.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  customer: any={}
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private hotelservice: HotelService,
    private fb: FormBuilder) {
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

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.hotelservice.editCustomerData(params['id']).subscribe(res => {
        this.customer=res;
      });
    });
  }
  updateCustomerData(c_name,c_emailid,c_address,occupation,c_mobileno,numbers_of_adult,numbers_of_child,room_no){
    this.route.params.subscribe(params=>{
      this.hotelservice.updateCustomerData(c_name,c_emailid,c_address,occupation,c_mobileno,numbers_of_adult,numbers_of_child,room_no,params['id']);
      this.router.navigate(['index']);
    });
  }

}
