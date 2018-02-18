import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EMPLOYEES } from '../mock-workers';

@Component({
  selector: 'app-employees',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {

  workers = EMPLOYEES;

  selectedEmployee: Employee;


  constructor() { }

  ngOnInit() {
  }

  onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
  }
}
