import { NgIf } from "@angular/common";

export class Employee {

    userId: number;
    firstName : string ;
    lastName : string ; 
    email : string ;
    mobile : string ;
    salary  : number;

    constructor(userId : number,firstName : string,lastName :string ,email: string,mobile :string,salary:number){
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.mobile = mobile;
        this.salary = salary;
    }


}
