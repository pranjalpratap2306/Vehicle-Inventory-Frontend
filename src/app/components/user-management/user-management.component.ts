import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-management',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent {
  constructor(private http: HttpClient) { }
  stname = 'DD';

  userList: any [] = [];
  onSubmit(form: any) {
    console.log('Form submitted:', form);
  }

  getUsers(){
    alert("calling...");
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any) => {
        this.userList = result;
    })
  }

  studentList : any [] = [
    {studId : 123 ,name : 'DD', mob: '5463647578', city : 'PUNE', isActive : false},
    {studId : 1234 ,name : 'EE', mob: '5463647578', city : 'PUNE', isActive : false},
    {studId : 1235 ,name : 'FF', mob: '5463647578', city : 'PUNE', isActive : false},
    {studId : 1236,name : 'GG', mob: '5463647578', city : 'PUNE', isActive : false},
    {studId : 1237 ,name : 'HH', mob: '5463647578', city : 'PUNE', isActive : false},
    {studId : 1238 ,name : 'II', mob: '5463647578', city : 'PUNE', isActive : false}
  ]
  
}
