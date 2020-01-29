import { Component, OnInit } from '@angular/core';
import { RequestHelper } from 'src/app/shared/helper/request.helper';
import { Router } from '@angular/router';
import { NavigationConstant } from 'src/app/shared/constant/navigation.constant';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: any[];
  cols: any;

  constructor(
    private apiService: RequestHelper,
    private router: Router
  ) {
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'firstName', header: 'First Name' },
      { field: 'lastName', header: 'Last Name' },
      { field: 'email', header: 'Email' }
  ];
   }

  ngOnInit() {
    this.apiService.get(NavigationConstant.LOCAL+NavigationConstant.EMPLOYEES).subscribe((response)=>{
      this.employees = response;
      console.log(response);
    });
  }

  create(){
    return this.router.navigate([NavigationConstant.EMPLOYEES_CREATE]);
  }

  edit(id){
    this.router.navigate([NavigationConstant.EMPLOYEES+id]);
  }

  delete(employee){
    employee.active = false;
    this.apiService.post(NavigationConstant.LOCAL+NavigationConstant.EMPLOYEES,employee).subscribe((response)=>{
      this.ngOnInit();
    });
  }

}
