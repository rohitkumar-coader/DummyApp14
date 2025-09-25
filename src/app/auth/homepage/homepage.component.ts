import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../user.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  // Slider data and logic for featured projects
  projects = [
    {
      img: 'assets/domysuma-logo.svg',
      planId: '20255689',
      title: 'Red Hill Residential Units',
      width: 'm',
      length: 'm',
      area: 'sq m'
    },
    {
      img: 'assets/domysuma-logo.svg',
      planId: '20255502',
      title: 'Redhill Residential Units',
      width: 'm',
      length: 'm',
      area: 'sq m'
    },
    {
      img: 'assets/domysuma-logo.svg',
      planId: '20255389',
      title: 'The Konza City Shopping Mall',
      width: 'm',
      length: 'm',
      area: 'sq m'
    },
    {
      img: 'assets/domysuma-logo.svg',
      planId: '20255689',
      title: 'Red Hill Residential Units',
      width: 'm',
      length: 'm',
      area: 'sq m'
    },
    {
      img: 'assets/domysuma-logo.svg',
      planId: '20255502',
      title: 'Redhill Residential Units',
      width: 'm',
      length: 'm',
      area: 'sq m'
    },
    {
      img: 'assets/domysuma-logo.svg',
      planId: '20255389',
      title: 'The Konza City Shopping Mall',
      width: 'm',
      length: 'm',
      area: 'sq m'
    }
    // Add more projects as needed
  ];

  sliderIndex = 0;
  visibleCount = 3; // Show 3 cards at a time, matching previous design

  get visibleProjects() {
    return this.projects.slice(this.sliderIndex, this.sliderIndex + this.visibleCount);
  }

  slideLeft() {
    if (this.sliderIndex > 0) {
      this.sliderIndex--;
    }
  }

  slideRight() {
    if (this.sliderIndex < this.projects.length - this.visibleCount) {
      this.sliderIndex++;
    }
  }
displayedColumns: string[] = ['id', 'firstName', 'lastName', 'age','eyeColor', 'email', 'actions'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(res => {
      this.dataSource.data = res.users;
      this.dataSource.sort = this.sort;
    });
  }
  onUpdate(user: any): void {
    const updatedUser = { ...user, firstName: 'Updated' }; // Example update
    this.userService.updateUser(user.id, updatedUser).subscribe(res => {
      console.log('User updated:', res);
      this.dataSource.data = this.dataSource.data.map(u => u.id === user.id ? res : u);
    });
  }
  onDelete(user: any): void {
    this.userService.deleteUser(user.id).subscribe(res => {
      console.log('User deleted:', res);
      this.dataSource.data = this.dataSource.data.filter(u => u.id !== user.id);
    });
  }
}
