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
      chapter: 'Diversitatea lumii vii',
      title: 'Introducere',
      contentPath:  'assets/stiinte-exacte/biologie/9/regnuri/introducere.html',
      quizID:"regnuri"
    },
    {
      id: 10,
      topic: 'stiinte-exacte',
      subject: 'biologie',
      grade: '9',
      chapter: 'Diversitatea lumii vii',
      title: 'Monera',
      contentPath:  'assets/stiinte-exacte/biologie/9/regnuri/monera.html',
      quizID:"regnuri"
    },
    {
      id: 11,
      topic: 'stiinte-exacte',
      subject: 'biologie',
      grade: '9',
      chapter: 'Diversitatea lumii vii',
      title: 'Protista',
      contentPath:  'assets/stiinte-exacte/biologie/9/regnuri/protista.html',
      quizID:"regnuri"
    },
    {
      id: 12,
      topic: 'stiinte-exacte',
      subject: 'biologie',
      grade: '9',
      chapter: 'Diversitatea lumii vii',
      title: 'Fungi',
      contentPath:  'assets/stiinte-exacte/biologie/9/regnuri/fungi.html',
      quizID:"regnuri"
    },
    {
      id: 13,
      topic: 'stiinte-exacte',
      subject: 'biologie',
      grade: '9',
      chapter: 'Diversitatea lumii vii',
      title: 'Plantee',
      contentPath:  'assets/stiinte-exacte/biologie/9/regnuri/plante.html',
      quizID:"regnuri"
    },
    {
      id: 14,
      topic: 'stiinte-exacte',
      subject: 'biologie',
      grade: '9',
      chapter: 'Diversitatea lumii vii',
      title: 'Animalae',
      contentPath:  'assets/stiinte-exacte/biologie/9/regnuri/animalae.html',
      quizID:"regnuri"
    },
    {
      id: 8311,
      topic: 'stiinte-exacte',
      subject: 'chimie',
      grade: '9',
      chapter: 'Tabelul periodic și grupele importante',
      title: 'Introducere',
      contentPath:  'assets/stiinte-exacte/chimie/9/tabelperiodic/introducere.html',
      quizID:"Tabel"
    },
    {
      id: 9311,
      topic: 'stiinte-exacte',
      subject: 'chimie',
      grade: '10',
      chapter: 'Alcani',
      title: 'Introducere',
      contentPath:  'assets/stiinte-exacte/chimie/10/alcani/introducere.html',
      quizID:"alcani"
    },{
      id: 9312,
      topic: 'stiinte-exacte',
      subject: 'chimie',
      grade: '10',
      chapter: 'Alcani',
      title: 'Halogenare',
      contentPath:  'assets/stiinte-exacte/chimie/10/alcani/halogenare.html',
      quizID:"alcani"
    },
    {
      id: 9313,
      topic: 'stiinte-exacte',
      subject: 'chimie',
      grade: '10',
      chapter: 'Alcani',
      title: 'Oxigenare',
      contentPath:  'assets/stiinte-exacte/chimie/10/alcani/oxigenare.html',
      quizID:"alcani"
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
