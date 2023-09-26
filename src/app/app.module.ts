import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GokuComponent } from './goku/goku.component';
import { hohanComponent } from './goku/hohan/hohan.component';
import { VidelComponent } from './goku/hohan/videl/videl.component';

@NgModule({
  declarations: [
    AppComponent,
    GokuComponent,
    hohanComponent,
    VidelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
