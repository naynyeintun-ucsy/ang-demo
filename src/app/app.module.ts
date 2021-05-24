import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { ExpenseComponent } from './component/expense/expense.component';
import { AddexpenseComponent } from './component/addexpense/addexpense.component';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './component/employee/employee.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmpDialogComponent } from './component/employee/emp-dialog/emp-dialog.component'
import {MatInputModule} from '@angular/material/input'
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field'
import {MatDialog, MatDialogModule} from '@angular/material/dialog'
import { MatButton, MatButtonModule } from '@angular/material/button'




const allRoutes : Routes = [
  {path:'expense' , component: ExpenseComponent   },
  {path:'add' , component: AddexpenseComponent},
  {path:'employee' , component: EmployeeComponent},
  {path:'edit/:id' , component: AddexpenseComponent},
  {path :'' , redirectTo:'expense' , pathMatch:'full'}


]

@NgModule({
  declarations: [
    AppComponent,
    ExpenseComponent,
    AddexpenseComponent,
    EmployeeComponent,
    EmpDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(allRoutes),
    Ng2SearchPipeModule,
    OrderModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
