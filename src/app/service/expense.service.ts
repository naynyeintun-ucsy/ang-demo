import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expense } from '../model/expense';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private baseUrl : string = 'http://nnt-expense-springboot.herokuapp.com/fs/'
  private getUrl: string =  this.baseUrl+'expends';
  private postUrl: string = this.baseUrl+'expend';


  constructor(private _httpClient: HttpClient) { }


  getExpense(): Observable<Expense[]> {
    return this._httpClient.get<Expense[]>(this.getUrl).pipe(
      map(response => response)
    )
  }


  findById(id :number) : Observable<Expense>{
    return this._httpClient.get<Expense>(this.postUrl+"/"+id).pipe(
      map( response => response)
    )
  }

  saveExpense(expense : Expense) : Observable<Expense>{
    return this._httpClient.post<Expense>(this.postUrl, expense);
  }


    deleteById(id : number) : Observable<any>{
      console.log("working in delete service");
      
      return this._httpClient.delete(this.postUrl+'/'+id, {responseType:"text"})
  }
}
