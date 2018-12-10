import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {User} from '../user';
import {UserService} from '../user.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  displayedColumns = ['id', 'username', 'password','role'];
  dataSource = new MatTableDataSource();
  
  constructor(private router: Router, private _userService: UserService) { }

  ngOnInit(): void {
    this._userService.getUsers().subscribe(
      data => {
        this.dataSource.data = data;
      }
    );
  }

}
