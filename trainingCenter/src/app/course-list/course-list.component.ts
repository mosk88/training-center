import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
export interface Course {
  image: string;
  nom: string;
  stackTechnique: string;
  dates: string;
  titre: string;
  numbreDePlace: number;
  tarif: number;
}

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {

  courses: Course[] = [
    {
      image: 'https://etudestech.com/wp-content/uploads/2023/05/midjourney-scaled.jpeg',
      nom: 'Developpeur Web',
      stackTechnique: 'Human Booster',
      dates: '2023-05-01',
      titre: 'Human Booster',
      numbreDePlace: 5,
      tarif: 5000 
    },
    {
      image: 'https://etudestech.com/wp-content/uploads/2023/05/midjourney-scaled.jpeg',
      nom: 'developpeur mobile',
      stackTechnique: 'Human Booster',
      dates: '2023-05-01',
      titre: 'Human Booster',
      numbreDePlace: 5,
      tarif: 5000 
    },
    {
      image: 'https://etudestech.com/wp-content/uploads/2023/05/midjourney-scaled.jpeg',
      nom: 'Data science',
      stackTechnique: 'Human Booster',
      dates: '2023-05-01',
      titre: 'Human Booster',
      numbreDePlace: 5,
      tarif: 5000 
    },
    {
      image: 'https://etudestech.com/wp-content/uploads/2023/05/midjourney-scaled.jpeg',
      nom: 'Devops',
      stackTechnique: 'Human Booster',
      dates: '2023-05-01',
      titre: 'Human Booster',
      numbreDePlace: 5,
      tarif: 5000 
    },
      {
      image: 'https://etudestech.com/wp-content/uploads/2023/05/midjourney-scaled.jpeg',
      nom: 'infrastructure',
      stackTechnique: 'Human Booster',
      dates: '2023-05-01',
      titre: 'Human Booster',
      numbreDePlace: 5,
      tarif: 5000 
    },
    {
      image: 'https://etudestech.com/wp-content/uploads/2023/05/midjourney-scaled.jpeg',
      nom: 'cybersecurity',
      stackTechnique: 'Human Booster',
      dates: '2023-05-01',
      titre: 'Human Booster',
      numbreDePlace: 5,
      tarif: 5000 
    },
      {
      image: 'https://etudestech.com/wp-content/uploads/2023/05/midjourney-scaled.jpeg',
      nom: 'Data science',
      stackTechnique: 'Human Booster',
      dates: '2023-05-01',
      titre: 'Human Booster',
      numbreDePlace: 5,
      tarif: 5000 
    },
    {
      image: 'https://etudestech.com/wp-content/uploads/2023/05/midjourney-scaled.jpeg',
      nom: 'Devops',
      stackTechnique: 'Human Booster',
      dates: '2023-05-01',
      titre: 'Human Booster',
      numbreDePlace: 5,
      tarif: 5000 
    },
      {
      image: 'https://etudestech.com/wp-content/uploads/2023/05/midjourney-scaled.jpeg',
      nom: 'infrastructure',
      stackTechnique: 'Human Booster',
      dates: '2023-05-01',
      titre: 'Human Booster',
      numbreDePlace: 5,
      tarif: 5000 
    },
    {
      image: 'https://etudestech.com/wp-content/uploads/2023/05/midjourney-scaled.jpeg',
      nom: 'cybersecurity',
      stackTechnique: 'Human Booster',
      dates: '2023-05-01',
      titre: 'Human Booster',
      numbreDePlace: 5,
      tarif: 5000 
    },
  ]

}


