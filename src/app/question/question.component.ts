import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  @Input() 
  question = {} as Question;

  @Output() 
  choiseMade = new EventEmitter<{id: number, choise: number}>();

  onRadioChange(event: any) {
    let choise = -1;
    switch(event.target.value)
    {
      case "paris":
        choise = 1;
        break;
      case "london":
        choise = 2;
        break;
      case "berlin":
        choise = 3;
        break;
      case "tokyo":
        choise = 4;
        break;
      default:
        console.log("there is no way you got here.");
    }

    console.log(event.target.value);
    console.log(choise);
    let id = this.question.id;
    this.choiseMade.emit({id, choise});
  }
}
