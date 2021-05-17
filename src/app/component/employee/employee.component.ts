import { Component, OnInit } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Employee } from '../../model/employee';
import { EmployeeService } from '../../service/employee.service';
import {NgForm} from "@angular/forms"


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  
  employees : Employee [] =[];
  firstName : any; 
  key : string = 'id';
  empOrder : boolean = false;
  page  : number  = 1;
  
  confirmDeletEmpId : number  = 1;

  constructor(private employeeService : EmployeeService ) { }

  ngOnInit(): void {

    this.employeeService.getEmployeeList().subscribe(
      response => this.employees = response 
    )
    }

    sort(key:string){
        this.key=key;
        this.empOrder=!this.empOrder;
    }


    Search(){
      if( this.firstName == ""){
        this.ngOnInit();
      }
      else {

         this.employees  = this.employees.filter (
           res => {
              return   res.firstName.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase())
           }
         )

      }
    }


    onDelete(id : number){
      console.log("click the delete button" , id);
      this.employeeService.deleteEmployee(id).subscribe(
        data =>{
          console.log(
          "delete component"
          );
          this.ngOnInit();
        }
      )  
    }

    

    onEdit(id : number){
      console.log("click the edit button" , id  );
      
    }

}
