import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HiddenComponent } from './hidden/hidden.component';
import { HiddenDirective } from './hidden.directive';
import { BiggerDirective } from './bigger.directive';
import { MultiPipe } from './multi.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HiddenComponent,
    HiddenDirective,
    BiggerDirective,
    MultiPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
