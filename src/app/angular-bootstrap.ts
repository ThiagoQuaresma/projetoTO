

import {MatToolbarModule} from '@angular/material/toolbar';         

import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
imports: [ MDBBootstrapModule.forRoot(),
           NgModule,

],
exports: [ NgModule

],
})
export class AngularBootstrapModule { }