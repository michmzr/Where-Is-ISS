import { AgmCoreModule } from 'angular2-google-maps/core';

import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {MaterialModule} from "@angular/material";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppComponent} from "./app.component";
import {ISSPositionComponent} from "./iss/issposition.component";

import {environment} from "../environments/environment";

let gmapsApi = environment.api.gmaps;

@NgModule({
    declarations: [
        AppComponent,
        ISSPositionComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule,
        MaterialModule,
        AgmCoreModule.forRoot({
            apiKey: gmapsApi
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule
{
}
