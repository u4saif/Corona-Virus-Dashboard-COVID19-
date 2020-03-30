import { Component } from '@angular/core';
import { UpdateAPI} from './update.service';

@Component({
  selector:'update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class Update{
  data="COVID 19 Update";
  update;
  constructor( service:UpdateAPI){
    this.update=service.getUpdate();
  }
  icon="https://raw.githubusercontent.com/u4saif/4covid19/master/icon.png"
}