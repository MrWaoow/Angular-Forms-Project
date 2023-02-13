import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../data/data.service';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'ps-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {
  pageTitle: string = "User Settings";
  // originalUserSettings: UserSettings = {
  //   name: "Mubdi",
  //   password: "1235",
  //   emailOffers: true,
  //   interfaceStyle: "medium",
  //   subscriptionType: "Lifetime",
  //   notes: "Satisfaied"
  // };
  originalUserSettings: UserSettings = {
    name: "Mubdi",
    password: "1235",
    emailOffers: true,
    interfaceStyle: "medium",
    subscriptionType: "Lifetime",
    notes: "Satisfaied"
  };
  userSettings: UserSettings = { ...this.originalUserSettings };
  subscriptionTypes!: Observable<string[]>;
  postError = false;
  postErrorMessage = "";
  singleModel = "on";
  radioModel = 'Middle';
  radioModelDisabled = 'Middle';
  modelGroupDisabled = false;
  startDate!: Date;

  constructor(private dataService: DataService) { }
  ngOnInit(): void {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();
    this.startDate = new Date();
  }
  onBlur(field: NgModel) {
    console.log("in onBlur: ", field.valid);
  }

  onHttpErroe(errorResponse: any): void {
    console.log("failed: ", errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit(form: NgForm) {
    console.log("in onSubmit: ", form.value)
    //   if (form.valid) {
    //     // this.dataService.postUserSettingsForm(this.userSettings).subscribe(
    //     //   success => console.log('success: ', success),
    //     //   failed => this.onHttpErroe(failed)
    //     // );

    //     this.dataService.postUserSettingsForm(this.userSettings).subscribe(
    //       (response: any) => {
    //         console.log('success: ', response)
    //       },
    //       (response: any) => {
    //         console.log('error: ', response)
    //       }
    //     );
    //   } else {
    //     this.postError = true;
    //     this.postErrorMessage = "Please fix the above errors";
    //   }
  }
}

