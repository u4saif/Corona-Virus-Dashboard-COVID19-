import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  date=new Date();
  day=this.date.getDate();
  
  name = "as of " + this.day ;
}
