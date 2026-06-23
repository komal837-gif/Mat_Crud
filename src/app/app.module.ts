import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './shared/components/home/home.component';
import { RouterModule } from '@angular/router';
import { GetConfirmComponent } from './shared/components/get-confirm/get-confirm.component';
import { LoaderInterceptor } from './shared/Interceptor/loader.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GetConfirmComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    RouterModule,
    AppRoutingModule,
    RouterModule
   
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:LoaderInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
