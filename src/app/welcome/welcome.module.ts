import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome.component';
import { MaterialModule } from '../material/material.module';

NgModule({
    declarations: [
        WelcomeComponent
    ],
    imports: [
        MaterialModule
    ]
})

export class WelcomeModule { }