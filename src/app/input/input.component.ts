import {Component, Input, Output, EventEmitter, Directive} from "@angular/core";
import {FormControl, FormGroup, FormBuilder, Validators,NG_VALIDATORS} from "@angular/forms";
import "rxjs/add/operator/debounceTime";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import "rxjs/add/operator/delay";
@Component({
  selector: 'course-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  @Input()
  public value: string;

  @Output()
  public myCustomEvent: EventEmitter<string> = new EventEmitter();


  public username: FormControl;
  // public fullname: FormGroup;
  public formModel: FormGroup;

  private _fb: FormBuilder;

  constructor(_fb: FormBuilder) {

    this._fb = _fb;
    this.username = new FormControl('init value')


    // this.fullname = new FormGroup({
    //   firsName:new FormControl('Igor'),
    //   lastName:new FormControl('Nepipenko'),
    // })

    // this.formModel = new FormGroup({
    //   fullname: new FormGroup({
    //     firsname: new FormControl('Igor'),
    //     lastname: new FormControl('Nepipenko'),
    //   })
    // })

    // this.username.statusChanges
    //   .subscribe(value=>console.log(value))


    // this.formModel = new FormGroup({
    //   emails: new FormArray([
    //     new FormControl()
    //   ])
    // })

    // this.formModel = new FormGroup({
    //   username: new FormControl(),
    //   ssn: new FormControl(),
    //   passwordGroup: new FormGroup({
    //     password: new FormControl(),
    //     pconfirm: new FormControl()
    //   }),
    // })
    this.formModel = _fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      ssn: ['', null, this.ssnValidator],
      passwordGroup: _fb.group({
        password: ['', Validators.minLength(5)],
        pconfirm: ['']
      }, this.equalValidator)
    })
  }

  public equalValidator({value}:FormGroup): {[key: string]: any} {
    const [first,...rest] = Object.keys(value || {});
    debugger
    const valid = rest.every(v=>value[v] === value[first]);
    return valid ? null : {equal: true}
  }

  public ssnValidator(control: FormControl): Observable<any> {
    const value = control.value || '';
    const valid = value.match(/^\d{9}$/);
    return Observable.of(valid ? null : {ssn: true}).delay(5000)
  }

  public addEmail() {
    (this.formModel.get('emails') as any).push(new FormControl())
  }

  public submit(v: any) {
    console.log(v)
  }

}


// NgModel не [ngModel], NgModelGroup , NgForm

// NG_VALIDATORS, NG_ASYNC_VALIDATORS, @Directive

// @Directive({
//   selector:'[ssn]',
//   provider:[{provide:NG_VALIDATORS,useValue:myCustomValidator,multi:true}]
// })

// FormControl, FormGroup, FormArray
