import { Component, OnInit } from '@angular/core';
import { RequestHelper } from 'src/app/shared/helper/request.helper';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api/';
import { NavigationConstant } from 'src/app/shared/constant/navigation.constant';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [MessageService]
})
export class CreateComponent implements OnInit {
  employee: any;
  firstName: '';
  lastName: '';
  email: '';

  constructor(
    private apiService: RequestHelper,
    private router: Router,
    private messageService: MessageService
  ) { 
    
  }

  ngOnInit() {
  }

  submit(){
    this.employee = 
      { 
        firstName: this.firstName, 
        lastName: this.lastName, 
        email: this.email,
        active: true
      };

    this.apiService.post(NavigationConstant.LOCAL+NavigationConstant.EMPLOYEES,this.employee).subscribe((res)=>{
      this.messageService.add({severity:'success', summary:'Employee Successfully Added', detail:'Form Submitted'});
      setTimeout(() => {
        this.router.navigate([NavigationConstant.EMPLOYEES]);
      },1000);
      },(fail)=>{
        console.log(fail)
      });
  }

}
