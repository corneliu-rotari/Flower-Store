import {Component, OnInit} from '@angular/core';
import * as moment from "moment";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  authenticated = false;

  constructor() {
  }
  public isLoggedIn() {
    if(localStorage.getItem("expires_at")==null){
      return false;
    }
    else {
      console.log("DA");
      // @ts-ignore
      return moment().isBefore(moment(JSON.parse(localStorage.getItem("expires_at"))));
    }
  }
  ngOnInit(): void {
   this.authenticated=this.isLoggedIn();
  }
  responsiveMenu() {

  }

  logout(): void {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

}
