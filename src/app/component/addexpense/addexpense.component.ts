import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Expense } from 'src/app/model/expense';
import { ExpenseService } from 'src/app/service/expense.service';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-addexpense',
  templateUrl: './addexpense.component.html',
  styleUrls: ['./addexpense.component.css']
})
export class AddexpenseComponent implements OnInit {

  expense: Expense = new Expense();
  buttonText : string ='Add Expense'

  constructor(private expenseService : ExpenseService, private _router: Router
    , private _activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    const isIdContain = this._activatedRoute.snapshot.paramMap.has("id")
    if(isIdContain){
      this.buttonText='Update Expense'
      const id = Number(this._activatedRoute.snapshot.paramMap.get("id"))
      this.expenseService.findById(id).subscribe(
        data => this.expense = data
      )
      
    }
    else {
      this.buttonText ='Add expense'
      console.log('No id contain ')
    }

  }

  testExpense(){
    console.log("In testing expense action")
  }

  saveExpense(){

    console.log("calling to submit action ......")
    this.expenseService.saveExpense(this.expense).subscribe(
     data=> {

        console.log('response is ', data)
        this._router.navigateByUrl("/expense")


      }
    )
  }

  editExpendse(){
    console.log("calling edit function ");

    
  }

}
