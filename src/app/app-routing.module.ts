import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LessonsComponent } from './pages/lessons/lessons.component';
import { LessonDetailComponent } from './pages/lesson-detail/lesson-detail.component';
import { QuizzesComponent } from './pages/quizzes/quizzes.component';
import { QuizDetailComponent } from './pages/quiz-detail/quiz-detail.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TopicViewComponent } from './pages/topic-view/topic-view.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lessons', component: LessonsComponent },
  { path: 'lessons/:topic', component: TopicViewComponent },
  { path: 'lessons/:topic/:subject/:grade/:chapter',component: LessonDetailComponent},
  { path: 'quizzes', component: QuizzesComponent },
  { path:'quizzes/:id', component: QuizDetailComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent }, // wildcard for 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
