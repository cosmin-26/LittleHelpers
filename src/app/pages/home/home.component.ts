import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";

interface Triangle {
  points: string;
  color: string;
  text: string;
  textX: number;
  textY: number;
  link: string;
  linkX: number;
  linkY: number;
}

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  size: number = 400; // Size of the hexagon
  triangles: Triangle[] = [];

  constructor() {
    this.generateHexagon();
  }

  generateHexagon() {
    const radius = this.size / 2;
    const centerX = this.size / 2;
    const centerY = this.size / 2;

    const colors = [
      '#cb6ce6', '#9c5ae7', '#8a23ff', 
      '#3d50ff', '#5e17eb', '#ff72c9'
    ];

    const texts = [
      'Ştiinţe \nsocio-umane', 
      'Arte', 
      'Ştiinţe aplicate', 
      'Tehnologie si \nInformatică', 
      'Ştinţe exacte', 
      'Limbă şi \ncomunicare'
    ];

    const links = [
      '/stiinte-socio-umane',
      '/arte',
      '/stiinte-aplicate',
      '/tehnologie-informatica',
      '/stiinte-exacte',
      '/limba-comunicare'
    ];

    for (let i = 0; i < 6; i++) {
      const angle = (60 * i) * (Math.PI / 180);

      const p1 = [centerX, centerY];
      const p2 = [
        centerX + radius * Math.cos(angle), 
        centerY + radius * Math.sin(angle)
      ];
      const p3 = [
        centerX + radius * Math.cos(angle + Math.PI / 3), 
        centerY + radius * Math.sin(angle + Math.PI / 3)
      ];

      const points = [p1, p2, p3].map(p => p.join(',')).join(' ');

      // Position text halfway between center and triangle edge
      const textX = centerX + radius * 0.5 * Math.cos(angle + Math.PI / 6);
      const textY = centerY + radius * 0.5 * Math.sin(angle + Math.PI / 6);

      // Position foreignObject slightly inside the triangle for clickable area
      const linkX = centerX + radius * 0.25 * Math.cos(angle + Math.PI / 6) - 50;
      const linkY = centerY + radius * 0.25 * Math.sin(angle + Math.PI / 6) - 15;

      this.triangles.push({
        points,
        color: colors[i],
        text: texts[i],
        textX,
        textY,
        link: '/lessons/' + texts[i].replace(/\s+/g, '-').toLowerCase(),
        linkX,
        linkY
      });
      console.log('/lessons/' + texts[i].replace(/\s+/g, '-').toLowerCase())
    }
  }  
}
