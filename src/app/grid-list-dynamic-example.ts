import {Component} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable,timer,interval} from 'rxjs'
import{ take ,map} from 'rxjs/operators';
declare var location:any;
@Component({
  selector: 'grid-list-dynamic-example',
  templateUrl: 'grid-list-dynamic-example.html',
  styleUrls: ['grid-list-dynamic-example.css'],
})
export class GridListDynamicExample {
  onTimeout(event:any):void{
      location.reload();
  }
}