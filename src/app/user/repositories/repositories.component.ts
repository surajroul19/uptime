import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
   //list of projects available
   @Input() listOfRepositories;

  constructor() { }

  ngOnInit() {
  }

}
