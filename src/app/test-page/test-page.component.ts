import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from '../question';
import { QuestionServiceService } from '../question-service.service';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent implements OnInit {
  category: string = "";
  questions: Question[] = [];
  showedQuestions: Question[] = []; 
  time: number = 0;
  
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private questionService : QuestionServiceService) {}

  ngOnInit() {
    const timer = setInterval(() => {
      this.time++;
    }, 1000);

    this.route.paramMap.subscribe(params => {
      const gotCategory = params.get('category');
      this.category =  gotCategory ? gotCategory : "Eroare-categorie";
      console.log(this.category);
    });

    if(this.category === "Eroare-categorie")
      return;
    
    const fileUrl = `assets/${this.category}/${this.category}-quiz.md`;
    this.http.get(fileUrl, { responseType: 'text' }).subscribe((fileContents) => {
        fileContents.split("\n").splice(2).join("\n").split("#### Q").forEach(
            q => {
              let question = {} as Question;
              question.id = Math.random() * Math.random() - Math.random();
              question.text = q.split("\n")[0];
              question.text = question.text.substring(question.text.indexOf('.') + 1);
              question.text = question.text.replaceAll("`", "");

              const code = q.split("```");
              if(code.length > 1)
                question.code = code[1].substring(4);
              else
                question.code = "";

              const choices = q.split("- [");
              question.r1 = choices[1] ?? "";
              question.r2 = choices[2] ?? "";
              question.r3 = choices[3] ?? "";
              question.r4 = choices[4] ?? "";

              question.r1 = question.r1.substring(2);
              question.r2 = question.r2.substring(2);
              question.r3 = question.r3.substring(2);
              question.r4 = question.r4.substring(2);

              question.r1 = question.r1.replaceAll("`", "");
              question.r2 = question.r2.replaceAll("`", "");
              question.r3 = question.r3.replaceAll("`", "");
              question.r4 = question.r4.replaceAll("`", "");
              
              let i = 0;
              for(let choice of choices) {
                if(choice[0] == 'x')
                  break;
                i++;
              }
              question.answer = i;
              question.choiseMade = -1;

              const reference = q.split("[Reference]")[1];
              question.reference = reference ? reference : "";

              if(question.text != "" && question.r1 != "" && question.r2 != "" && question.r3 != "" && question.r4 != "")
                this.questions.push(question);
            }
          );
        this.questions.splice(0, 1);
        console.log(this.questions);

        this.questions.sort(() => Math.random() - 0.5);
        this.questionService.shownQuestions = this.questions.slice(0, 15);
        this.showedQuestions = this.questionService.shownQuestions;
      });
  }

  onSubmit(event: any) {
    let right = 0;
    this.questionService.shownQuestions.forEach(q => {
      if(q.answer === q.choiseMade)
        right++;
    });

    this.router.navigate(['/results', { rightAnswers: right , time : this.time}]);
  }

  onChoiseMade(event: {id: number, choise: number}) {
    console.log('Number selected:', event.choise);
    const obj = this.questionService.shownQuestions.find(q => q.id === event.id) ?? {choiseMade: 0};
    console.log(obj);
    obj.choiseMade = event.choise;
  }
}
