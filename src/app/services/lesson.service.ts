import { Injectable } from '@angular/core';
import { Lesson } from '../models/lesson.model';

@Injectable({ providedIn: 'root' })
export class LessonService {
  private lessons: Lesson[] = [
    {
      id: 1,
      topic: 'stiinte-exacte',
      subject: 'biologie',
      grade: '9',
      chapter: 'Celule',
      title: 'Introducere',
      contentPath:  'assets/stiinte-exacte/biologie/9/celule/introducere.html',
      quizID:"celule-intro"
    },
    {
      id: 2,
      topic: 'stiinte-exacte',
      subject: 'biologie',
      grade: '9',
      chapter: 'Celule',
      title: 'Organite',
      contentPath:  'assets/stiinte-exacte/biologie/9/celule/test.html',
      quizID:"celule-intro"

    },
    {
      id: 3,
      topic: 'stiinte-exacte',
      subject: 'biologie',
      grade: '9',
      chapter: 'Forme de viata',
      title: 'Animalae',
      contentPath:  'assets/stiinte-exacte/biologie/9/celule/introducere.html',
      quizID:"celule-intro"

    },
    {
      id: 4,
      topic: 'stiinte-exacte',
      subject: 'biologie',
      grade: '10',
      chapter: 'Genetica',
      title: 'Genetics',
      contentPath:  'assets/stiinte-exacte/biologie/9/celule/introducere.html',
      quizID:"celule-intro"

    },
    {
      id: 5,
      topic: 'stiinte-exacte',
      subject: 'fizica',
      grade: '10',
      chapter: 'Termodinamica',
      title: 'Legea a 2-a',
      contentPath:  'assets/stiinte-exacte/biologie/9/celule/introducere.html',
      quizID:"celule-intro"

    },
    {
      id: 6,
      topic: 'tehnologie-informatica',
      subject: 'algebra',
      grade: '10',
      chapter: 'Algebră',
      title: 'Quadratics',
      contentPath:  'assets/stiinte-exacte/biologie/9/celule/introducere.html',
      quizID:"celule-intro"
    }
  ];
  

  getLessons(topic: string, chapter: string, subject: string, grade: string): Lesson[] {
    return this.lessons.filter(
      lesson =>
        lesson.topic === topic &&
        lesson.chapter === chapter &&
        lesson.subject === subject &&
        lesson.grade === grade
    );
  }
  
  getChaptersByTopic(topic: string): Lesson[] {
    return this.lessons.filter(lesson => lesson.topic === topic);
  }
}
