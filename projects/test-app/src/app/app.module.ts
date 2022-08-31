import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxBootstrapDarkmodeModule, THEME_LOADER, THEME_SAVER } from 'ngx-bootstrap-darkmode';
import { of } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxBootstrapDarkmodeModule
  ],
  providers: [
    {
      provide: THEME_LOADER,
      useValue: () => of('loaded-light'),
    },
    {
      provide: THEME_SAVER,
      useValue: (theme: any) => console.log('saving', theme),
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
