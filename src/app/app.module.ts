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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'




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
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(allRoutes),
    Ng2SearchPipeModule,
    OrderModule,
    NgxPaginationModule,
    BrowserAnimationsModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
