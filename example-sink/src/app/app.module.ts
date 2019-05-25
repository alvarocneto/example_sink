import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { ExampleNormalComponent } from './example-normal/example-normal.component';
import { ExampleSubsinkComponent } from './example-subsink/example-subsink.component';
import { ExampleSyncComponent } from './example-sync/example-sync.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleNormalComponent,
    ExampleSubsinkComponent,
    ExampleSyncComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
