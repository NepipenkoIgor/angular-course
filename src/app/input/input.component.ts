import {Component, Input, Output, EventEmitter} from '@angular/core';

class CommonProp{

}

@Component({
  selector: 'course-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent extends CommonProp{

  @Input()
  public value: string;

  @Output()
  public myCustomEvent: EventEmitter<string> = new EventEmitter();

  public emit(ev: MouseEvent) {
    let el = ev.target as HTMLInputElement;
    this.myCustomEvent.emit(el.value);
  }


}
