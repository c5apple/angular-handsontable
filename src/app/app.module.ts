import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HotTableModule } from '@handsontable/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotTableComponent } from './hot-table/hot-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HotTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HotTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// bootstrap
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

platformBrowserDynamic().bootstrapModule(AppModule).catch(err => { console.error(err) });
