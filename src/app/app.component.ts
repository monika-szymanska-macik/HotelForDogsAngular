import { Component } from '@angular/core';
import { promise } from 'selenium-webdriver';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // `
  // <nav class='navbar navbar-expand navbar-light bg-light'>
  //   <a class='navbar-brand'>{{pageTitle}}</a>
  //   <ul class='nav nav-pills'>
  //     <li><a class='nav-link'[routerLink]="['/clients']">Client List</a></li>
  //     <li><a class='nav-link'[routerLink]="['/form']">Form</a></li>
  //   </ul>
  // </nav>
  // <div class='container'>
  //   <router-outlet></router-outlet>
  // </div>
  // `
})

export class AppComponent {
  pageTitle :  string = 'Hotel for Dogs';
  title: string = 'Hotel';
  isAuthenticated = false;

  async logout(): Promise<void>{

  }
}