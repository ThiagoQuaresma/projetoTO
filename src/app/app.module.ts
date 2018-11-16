import { MatButtonModule, MatFormFieldModule, MatDialogModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent} from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {DragDropModule} from '@angular/cdk/drag-drop';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';

import { MaterialModule } from './material';
import { AngularBootstrapModule } from './angular-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MyDiaLogComponent } from './my-dia-log/my-dia-log.component';


@NgModule({
  declarations: [
    AppComponent,
    MyDiaLogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    // AngularBootstrapModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MDBBootstrapModule.forRoot(),
    MDBBootstrapModule.forRoot()
  ],
  entryComponents:[
    MyDiaLogComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[  
    DragDropModule,
    ScrollingModule,
    CdkTableModule,
    CdkTreeModule]
})
export class AppModule { }
