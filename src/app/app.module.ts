import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { ClientModule } from './clients/client.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { SharedModule } from './shared/shared.module';
import { UserSettingsFormComponent } from './user-settings-form/user-settings-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { DogComponent } from './dog/dog.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    UserSettingsFormComponent,
    DogComponent
  ],
  imports: [
    FormsModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: 'form', component: UserSettingsFormComponent },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ClientModule,
    HttpClientModule,
    ButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
