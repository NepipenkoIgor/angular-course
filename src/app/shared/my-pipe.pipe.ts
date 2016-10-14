import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  public transform(value: any[], args?: string): any {
    console.log('args',args)
    let newVal = value.filter(item=> /o/i.test(item.name));
    return newVal;
  }

}
