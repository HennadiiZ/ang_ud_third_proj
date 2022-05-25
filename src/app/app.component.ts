import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  randomText: any = lorem.sentence();
  enteredText = "";

  onInput(event: Event | any){
    // console.log(event.data)
    this.enteredText = event.value
    console.log(this.enteredText);
  }
}
