import { HttpClient } from '@angular/common/http';
import { computeMsgId } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl = 'https://nnt-expense-springboot.herokuapp.com/fs/'
 //baseUrl = 'http://localhost:9098/fs/'
  private postUrl: string = this.baseUrl+'employee';
  private getByIdURL: String = this.baseUrl+'employee/';

  constructor(private http : HttpClient) { }

  getEmployeeList(){

    return this.http.get<Employee[]>(this.baseUrl+'employees');

  }

  deleteEmployee(id : number){
    return this.http.delete(this.baseUrl+'employee/'+id , {responseType : "text"})
  }

  saveEmployee( employee : Employee){
    console.log("save employee action" , employee)
    console.log("employee user id" , employee.userId)
    if(employee.userId != 0 && employee.userId !=undefined){
      return this.http.put(this.postUrl,employee)
    }
    else{
      return this.http.post(this.postUrl,employee)
    }
    
   
  }

  findById( id : number){
    return this.http.get<Employee>(this.getByIdURL+''+id);
  }




}
