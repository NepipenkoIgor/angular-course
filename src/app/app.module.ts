import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {InputComponent} from './input/input.component';
import {MyPipePipe} from './shared/my-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    MyPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
