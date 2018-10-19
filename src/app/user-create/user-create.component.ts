import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  users: any;


  constructor(private http: HttpClient, private router: Router) {
    this.users = <Object>{};
  }

  ngOnInit() {
  }

  createUser() {
    this.http.post('//localhost:8080/users', this.users)
      .subscribe(res => {
          this.router.navigate(['//localhost:8080/user-detail', res]);
        }, (err) => {
          console.log(err);
        }
      );

  }

}


