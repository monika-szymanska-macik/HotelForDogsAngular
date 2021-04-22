import { NgModule } from '@angular/core';
import { ClientListComponent } from './client-list.component';
import { ClientDetailComponent } from './client-detail.component';
import { RouterModule } from '@angular/router';
import { ClientDetailGuard } from './client-detail.guard';
import { SharedModule } from '../shared/shared.module';
import { DogComponent } from '../dog/dog.component';



@NgModule({
  declarations: [
    ClientListComponent,
    ClientDetailComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'clients', component: ClientListComponent },
      {
        path: 'clients/:clientId',
        canActivate: [ClientDetailGuard],
        component: ClientDetailComponent
      },
      {
        path: 'clients/:clientId/:dogId',
        component: DogComponent
      }
    ]),
    SharedModule
  ]
})
export class ClientModule { }
