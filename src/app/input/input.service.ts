import {Injectable,ReflectiveInjector} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import {HelpService} from './help.service';

@Injectable()
export class InputService {

  private _helpService: HelpService;
  public _http: Http;

  constructor(_http: Http, _helpService: HelpService) {
    this._helpService = _helpService;
    this._http = _http;
  }

  public say() {
    console.log('Say Hi')
  }

  public getUsers(): Observable<any> {
    return this._http.get('http://learn.javascript.ru/courses/groups/api/participants?key=1r6w6r6')
      .map(res => res.json()).mergeMap(users => Observable.from(users)).filter((user: any) => user.photo)
      .catch(err => Observable.of(''))
  }
}

@Injectable()
export class Children extends InputService {
  constructor(http: Http, helpService: HelpService) {
    super(http, helpService);
    console.log(this)
  }
}


export class SmallService {
  public run() {
    console.log('Small Service')
  }
}


export class LargeService {
  public run() {
    console.log('Large Service')
  }
}


export class ViewPortService {
  public determinateService() {
    let w: number = Math.max(document.documentElement.clientWidth, window.innerWidth)
    if (w < 800) {
      return new SmallService();
    }
    return new LargeService();
  }
}
