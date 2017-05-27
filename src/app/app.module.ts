import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {MaterialModule} from "@angular/material";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AgmCoreModule} from "angular2-google-maps/core";
import {environment} from "../environments/environment";

import {AppComponent} from "./app.component";
import {ISSPositionComponent} from "./iss/issposition.component";
import "./shared/rxjs.imports";

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
