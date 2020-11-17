import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly http:HttpClient) { }

  //function to get the user details
  getUserDetails(){
    return this.http.get('https://api.github.com/users/erossignon')
  }

  //function to get the user image
  getUserImage(link){
    return this.http.get(link, { responseType: "blob" })
  }

  //function to get the user projects details
  getReposDetails(link){
    return this.http.get(link)
  }
}
