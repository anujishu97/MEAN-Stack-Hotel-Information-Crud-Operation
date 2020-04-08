import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  uri = 'http://localhost:4000/customers';

  constructor(private http: HttpClient) { }
  

  addUser(c_name, c_emailid, c_address, occupation, c_mobileno, numbers_of_adult, numbers_of_child, room_no){
    const obj={
      c_name: c_name,
      c_emailid: c_emailid,
      c_address: c_address,
      occupation: occupation,
      c_mobileno: c_mobileno,
      numbers_of_adult: numbers_of_adult,
      numbers_of_child: numbers_of_child,
      room_no: room_no
    };
    this.http.post(`${this.uri}/add`, obj)
    .subscribe(res => console.log('Done'));
}
getCustomerData() {
  return this
          .http
          .get(`${this.uri}`)
}
editCustomerData(id){
  return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }
  updateCustomerData(c_name,c_emailid,c_address,occupation,c_mobileno,numbers_of_adult,numbers_of_child,room_no,id){
    const obj={
      c_name: c_name,
      c_emailid: c_emailid,
      c_address : c_address,
      occupation: occupation,
      c_mobileno: c_mobileno,
      numbers_of_adult: numbers_of_adult,
      numbers_of_child: numbers_of_child,
      room_no: room_no
    };
    this.http.post(`${this.uri}/update/${id}`,obj).subscribe(res=>console.log("Update Successfully"));
  }

  deleteCustomerData(id){
    return this.http.get(`${this.uri}/delete/${id}`);
  }
}
