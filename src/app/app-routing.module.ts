import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LessonsComponent } from './pages/lessons/lessons.component';
import { LessonDetailComponent } from './pages/lesson-detail/lesson-detail.component';
import { QuizzesComponent } from './pages/quizzes/quizzes.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lessons', component: LessonsComponent },
  { path: 'lessons/:topic', component: LessonDetailComponent },
  { path: 'quizzes', component: QuizzesComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent }, // wildcard for 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
