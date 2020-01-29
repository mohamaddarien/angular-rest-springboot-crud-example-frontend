import { Component, OnInit } from '@angular/core';
import { RequestHelper } from 'src/app/shared/helper/request.helper';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationConstant } from 'src/app/shared/constant/navigation.constant';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  employee: any;
  apiUrl = NavigationConstant.LOCAL+NavigationConstant.EMPLOYEES;

  constructor(
    private apiService: RequestHelper,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.employee = 
      { 
        firstName: '', 
        lastName: '', 
        email: ''
      };
   }

  ngOnInit() {
    this.getEmployee(this.route.snapshot.params['id']);
  }

  getEmployee(id){
    this.apiService.get(this.apiUrl+id).subscribe(response => {
      this.employee = response;
    });
    // this.apiService.get('http://localhost:8080/employees/'+ id).subscribe({
    //   next(res){
    //     this.employee = res;
    //   },
    //   error(err){
    //     console.error(err);
    //   }
    // });
  }

  updateEmployee(){
    this.apiService.post(this.apiUrl,this.employee).subscribe((res)=>{
      this.router.navigate([NavigationConstant.EMPLOYEES]);
      },(fail)=>{
        console.log(fail)
      });
  }

}
