import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppMainComponent } from './app-main/app-main.component';
import { QuestionComponent } from './question/question.component';
import { TestPageComponent } from './test-page/test-page.component';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { AnswearComponent } from './answear/answear.component';

const routes: Routes = [
  { path: '', component: AppMainComponent },
  { path: 'test', component: TestPageComponent },
  { path: 'results', component: ResultPageComponent }
];

@NgModule({
  declarations: [
    AppMainComponent,
    QuestionComponent,
    TestPageComponent,
    AppComponent,
    ResultPageComponent,
    AnswearComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent, AppMainComponent, TestPageComponent] 
})
export class AppModule { }
