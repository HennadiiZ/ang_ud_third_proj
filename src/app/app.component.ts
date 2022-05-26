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
    this.enteredText = event.value
    // this.enteredText = event.data
    console.log(this.enteredText);
  }

  compare(letter: any, enteredText: any){
     
      if(!enteredText){
        return 'default';
      }

      return letter === enteredText ? 'green' : 'red';
  }
}


// Character by Character Comparison + Styling by Comparison (very interesting part)