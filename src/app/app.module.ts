import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BGHighlight } from './basic-highlight/basic-highlight.directive';
import { NewHilightDirective } from './new-highlight/new-hilight.directive';

@NgModule({
  declarations: [
    AppComponent,
    BGHighlight,
    NewHilightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
