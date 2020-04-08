import { Component, OnInit } from '@angular/core';
import {Customer} from './customer';
import { HotelService } from '../../hotel.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor( private hotelservice: HotelService,private route: ActivatedRoute,
    private router: Router) { }

  customers: Customer[];

  ngOnInit() {
    this.hotelservice
        .getCustomerData()
        .subscribe((data:Customer[])=>{
        this.customers=data;
        })
  }

  deleteCustomerData(id)
  {
      this.hotelservice.deleteCustomerData(id).subscribe(res=>{
        console.log("Data deleted successfully");
        this.router.navigate(['index']);
      });
  }

}
