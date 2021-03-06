import { BrowserModule } from '@angular/platform-browser' ;
import { NgModule } from '@angular/core' ;
import { NgbModule } from '@ng-bootstrap/ng-bootstrap' ;
import { CommonModule } from '@angular/common' ;

import { AppRoutingModule } from  './app-routing.module' ;
import { AppComponent } from  './app.component' ;
import { HeaderModule } from  './shared/components/header/header.module' ;
import {FooterModule} from './shared/components/footer/footer.module';



@ NgModule ({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule ,
    CommonModule ,
    AppRoutingModule ,
    HeaderModule ,
    FooterModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule{}
