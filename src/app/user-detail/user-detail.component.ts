import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  users: any;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router ) { }

  ngOnInit() {
    this.getUserDetails(this.route.snapshot.params['id']);

  }

  getUserDetails(id) {
    this.http.get('//localhost:8080/users/' + id).subscribe( data => { this.users = data; });

  }

  deleteUser(id){
     this.http.delete('//localhost:8080/users/' + id).subscribe(res => {
       this.router.navigate(['//localhost:8080/user']);
       }, (err) => {console.log(err);
        }
     );
  }

}
