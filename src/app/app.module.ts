import { NgModule } from '@angular/core';
import { DataService } from './data.service';         // Add this
import { HttpClientModule } from '@angular/common/http';    // Add this
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule                          // Add this
  ],
  providers: [DataService],                    // Add this
  bootstrap: [AppComponent]
})
export class AppModule { }
