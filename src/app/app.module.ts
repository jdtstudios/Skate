import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';

import {AppComponent} from './app.component';

import { TooltipModule} from "ngx-bootstrap";

import { NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BsDropdownModule.forRoot(),
        HttpClientModule,
        NgbModule.forRoot(),
        TooltipModule.forRoot(),
        BrowserModule, FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
