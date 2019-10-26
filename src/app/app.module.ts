import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { HomeComponent } from './home/home.component';

import { TelcoService } from './services/telco.service';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule
  ],
  providers: [TelcoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 