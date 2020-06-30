import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileNavbarComponent } from './components/navigation/mobile-navbar/mobile-navbar.component';
import { SideNavbarComponent } from './components/navigation/side-navbar/side-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileNavbarComponent,
    SideNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
