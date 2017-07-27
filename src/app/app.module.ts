import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventsThumbnailComponent } from './events-thumbnail/events-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventsThumbnailComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
