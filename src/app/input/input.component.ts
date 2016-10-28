import {Component, Input, Output, EventEmitter, Inject} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

import {InputService} from './input.service';

@Component({
  selector: 'course-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  private _inputService:InputService;

  public name = 'VOVA';

  public obj = {
    name: 'Vlad',
    id: 3
  }
  public a: number = 0.2345;
  public b: number = 1.2845;

  constructor(_inputService:InputService,
    @Inject('SizeService') private _sizeService,
              @Inject('API_URL') private _api_url ){
    this._sizeService.run();
    this._inputService=_inputService;

    this._inputService.getUsers().subscribe(users=>{
      console.log(users)
    })

  }

  public msg = new Promise<string>((resolve, reject) => {
    setTimeout(() => resolve('My msg'), 3000)
  })

  public time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000)
  })
  // public isLogged: boolean = true;
  // public width: number = 200;
  //
  // public accounts = [
  //   {id: 3, name: 'Igor'},
  //   {id: 2, name: 'Vova'},
  //   {id: 1, name: 'Mike'},
  //   {id: 4, name: 'Tanya'},
  //   {id: 5, name: 'Ola'},
  // ];
  // public tab = 1;


  @Input()
  public value: string;

  @Output()
  public myCustomEvent: EventEmitter<string> = new EventEmitter();


  change() {
    console.log(this)
  }

  // public emit(ev: MouseEvent) {
  //   let el = ev.target as HTMLInputElement;
  //   this.myCustomEvent.next(el.value);
  // }

  //
  // public trackFn(index, item): any {
  //   console.log(index, item)
  //   return item.id
  // }

}
