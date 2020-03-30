import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Update } from './updates/update.component';
import { UpdateAPI } from './updates/update.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, Update ],
  bootstrap:    [ AppComponent ],
  providers: [ UpdateAPI]
})
export class AppModule { }
