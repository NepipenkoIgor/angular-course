import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {InputComponent} from './input/input.component';
import {MyPipePipe} from './shared/my-pipe.pipe';
import {ViewPortService,InputService,Children} from './input/input.service';
import {HelpService} from './input/help.service';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    MyPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [{provide:InputService,useClass:Children},
    ViewPortService,{
    provide: 'SizeService',
    useFactory: (view: ViewPortService) => {
      return view.determinateService()
    }, deps: [ViewPortService]
  }
    , HelpService,
    {provide:'API_URL',useValue:'http://some.com/?'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
