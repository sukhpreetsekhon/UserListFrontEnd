import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  users: any;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getUser(this.route.snapshot.params['id']);
  }

  getUser(id) {
    this.http.get('//localhost:8080/users/' + id).subscribe(data => {
      this.users = data;
    });
  }

  update(id, data) {
    this.http.put( '//localhost:8080/users/' + id, data)
      .subscribe(res => {
        id = res['id'];
          this.router.navigate(['/user-detail', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }


}
