import { Component, OnInit } from '@angular/core'
import { Employee } from '../../model/employee';
import { EmployeeService } from '../../service/employee.service';
import {MatDialog , MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { EmpDialogComponent } from './emp-dialog/emp-dialog.component';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee : Employee;
  employees : Employee [] =[];
  firstName : any; 
  key : string = 'id';
  empOrder : boolean = false;
  page  : number  = 1;
  
  confirmDeletEmpId : number  = 1;

  constructor(private employeeService : EmployeeService , public dialog: MatDialog ) { }

  ngOnInit(): void {

    this.fetchEmployee()
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

    fetchEmployee()
    {
      this.employeeService.getEmployeeList().subscribe(
        response => this.employees = response 
      )
      
    }

    

    onEdit(id : number){
      console.log("click the edit button" , id  );
      this.employeeService.findById(id).subscribe( data =>{
        console.log("data on api  call is ",data)
        this.employee=data
        this.openDialog()
        this.fetchEmployee()
      });
    
    }

    openDialog(): void {
      console.log("open dialog data", this.employee)
      const dialogRef = this.dialog.open(EmpDialogComponent, {
        width: 'auto',
        height: 'auto',
        data : this.employee
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.employee = result
        this.fetchEmployee()
      });
    }




}
