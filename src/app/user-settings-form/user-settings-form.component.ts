import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
import { IUserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  userSettings! : IUserSettings;
  postError = false;
  postErrorMessage = '';
  singleModel = "On";

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.userSettings = {
      firstName: "Jan",
      lastName: "Nowak",
      phoneNumber: "000",
      firstDay: new Date(2021, 3, 17),
      lastDay: new Date(2021, 3, 21),
      dogWeight: "smallDog",
      comments: "n/a",
      regulations: false
    }
  }

  onBlur(field: NgModel){

  }

  onHttpError(errorResponse: any){
    console.log('error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
    
  }

  onSubmit(form: NgForm){
    if(form.valid){
      this.dataService.postUserSettingsForm(this.userSettings).subscribe(
        result => console.log('success', result),
        error => this.onHttpError(error)
      );
    }
    else {
      this.postError = true;
      this.postErrorMessage = 'Please fix the above errors';
    }
  }

}
