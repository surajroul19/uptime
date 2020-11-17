import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userDetails: any;
  userImage;
  repositoryDetails;
  selectedTab: any;
  allProjects: Object;

  constructor(private readonly userService: UserService) { }

  ngOnInit() {
    this.getUserDetails()
  }

  getUserDetails() {
    this.userService.getUserDetails().subscribe(data => {
      this.userDetails = data;
      this.getUserImage(data['avatar_url']);
      this.getRepositoryDetails(data['subscriptions_url'])
      this.selectedTab = '1'
    })
  }

  getUserImage(link: string) {
    this.userService.getUserImage(link).subscribe(image => {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onloadend = () => {
        this.userImage = reader.result
      }
    })
  }

  getRepositoryDetails(link: string) {
    this.userService.getReposDetails(link).subscribe(details => {
      this.allProjects=details;
      this.repositoryDetails = details;
    })
  }

  changeTab(tabIndex) {
    this.selectedTab = tabIndex;
  }
}
