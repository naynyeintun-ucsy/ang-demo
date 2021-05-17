import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Expense } from 'src/app/model/expense';
import { ExpenseService } from 'src/app/service/expense.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  expenses : Expense[] =[];

  constructor(private _expenseService : ExpenseService, private _router: Router) { }

  ngOnInit(): void {
      
    this.fetchData()
    
  }

  fetchData(){
    console.log("fetching data now");
    
    this._expenseService.getExpense().subscribe(
      data => this.expenses = data
    )
  }

  clickDeleteButton(id : number) : void {
    console.log("click delete button" , id)
    this._expenseService.deleteById(id).subscribe(
      data =>{
        console.log("delete response is ", data)
        this.fetchData();
      }
    )
    
  }

  clickEditButton(id :number): void {
      this._router.navigateByUrl(`/edit/${id}`)
  }






}
