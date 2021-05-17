import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl = 'http://nnt-expense-springboot.herokuapp.com/fs/'

  constructor(private http : HttpClient) { }

  getEmployeeList(){

    return this.http.get<Employee[]>(this.baseUrl+'employees');

  }

  deleteEmployee(id : number){
    return this.http.delete(this.baseUrl+'employee/'+id , {responseType : "text"})
  }




}
