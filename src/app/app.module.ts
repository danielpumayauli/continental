import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
// import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    // SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
