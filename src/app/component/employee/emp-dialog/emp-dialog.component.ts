import { Component, OnInit , Inject } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EmployeeService } from 'src/app/service/employee.service';


@Component({
  selector: 'app-emp-dialog',
  templateUrl: './emp-dialog.component.html',
  styleUrls: ['./emp-dialog.component.css']
})
export class EmpDialogComponent implements OnInit {
  
  public employee : Employee = new Employee();
  constructor(public dialogRef: MatDialogRef<EmpDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any , public employeeService :EmployeeService) { 
      console.log("const data" , data)
    }

  ngOnInit(): void {
    console.log("in onit"+this.employee)
    console.log("in onit data"+this.data)
    if(this.data != undefined ){
      console.log(this.employee)
      this.employee = this.data;
    }
    this.changePosition();
  }

  changePosition() {
    this.dialogRef.updatePosition({ top: '80px', left: '100px' });
    
}

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveEmployee(employee : Employee){
    console.log(employee)
    console.log(employee.firstName)
    this.employeeService.saveEmployee(this.employee).subscribe(
      data=>{
        console.log("response is",data)
      }
    )
    this.dialogRef.close();
  }

  

}
