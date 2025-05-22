import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // ✅ Import this
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LessonsComponent } from './pages/lessons/lessons.component';
import { LessonDetailComponent } from './pages/lesson-detail/lesson-detail.component';
import { QuizzesComponent } from './pages/quizzes/quizzes.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LessonListComponent } from './pages/lesson-list/lesson-list.component';
import { TopicViewComponent } from './pages/topic-view/topic-view.component';
import { QuizDetailComponent } from './pages/quiz-detail/quiz-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LessonsComponent,
    LessonDetailComponent,
    QuizzesComponent,
    AboutComponent,
    NotFoundComponent,
    LessonListComponent,
    TopicViewComponent,
    QuizDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, // ✅ Add this line
    NavbarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
