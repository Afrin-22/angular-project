import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SuccessAlert } from './success-alert/success-alert.component';
import { WarningAlert } from './warning-alert/warning-alert.component';
import { Assignment2 } from './assignment2/assignment2.component';
import { Assignment3 } from './assignment3/assignment3.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessAlert,
    WarningAlert,
    Assignment2,
    Assignment3
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
