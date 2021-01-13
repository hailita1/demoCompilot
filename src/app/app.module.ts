import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgxCopilotModule} from 'ngx-copilot';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxCopilotModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
