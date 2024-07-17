import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { RegistrationFormComponent } from '../registration-form/registration-form.component';
import { RouterLink } from '@angular/router';


export interface Course {
  image: string;
  nom: string;
  stackTechnique: string;
  dates: string;
  titre: string;
  numbreDePlace: number;
  tarif: number;
  adresse: string;
}


@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, RegistrationFormComponent, RouterLink],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})

export class CourseListComponent {

  courses: Course[] = [
    {
      image: 'https://etudestech.com/wp-content/uploads/2023/05/midjourney-scaled.jpeg',
      nom: 'Data science',
      stackTechnique: 'Human Booster',
      dates: '2023-05-01',
      titre: 'Human Booster',
      numbreDePlace: 5,
      tarif: 5000,
      adresse: '1 Rue de l\'Europe, 75000 Paris'
    },
    {
      image: 'https://etudestech.com/wp-content/uploads/2023/05/midjourney-scaled.jpeg',
      nom: 'Devops',
      stackTechnique: 'Human Booster',
      dates: '2023-05-01',
      titre: 'Human Booster',
      numbreDePlace: 5,
      tarif: 5000,
      adresse: '5 Rue de l\'Europe, 75000 Paris'
    },
    {
      image: 'https://etudestech.com/wp-content/uploads/2023/05/midjourney-scaled.jpeg',
      nom: 'Data science',
      stackTechnique: 'Human Booster',
      dates: '2023-05-01',
      titre: 'Human Booster',
      numbreDePlace: 5,
      tarif: 5000,
      adresse: '5 Rue de l\'Europe, 75000 Paris'
    },
    {
      image: 'https://etudestech.com/wp-content/uploads/2023/05/midjourney-scaled.jpeg',
      nom: 'Devops',
      stackTechnique: 'Human Booster',
      dates: '2023-05-01',
      titre: 'Human Booster',
      numbreDePlace: 5,
      tarif: 5000,
      adresse: '5 Rue de l\'Europe, 69600 Oullins'
    },
      {
      image: 'https://etudestech.com/wp-content/uploads/2023/05/midjourney-scaled.jpeg',
      nom: 'infrastructure',
      stackTechnique: 'Human Booster',
      dates: '2023-05-01',
      titre: 'Human Booster',
      numbreDePlace: 5,
        tarif: 5000,
        adresse: '5 Rue de l\'Europe, 69600 Oullins'
    },
    {
      image: 'https://etudestech.com/wp-content/uploads/2023/05/midjourney-scaled.jpeg',
      nom: 'cybersecurity',
      stackTechnique: 'Human Booster',
      dates: '2023-05-01',
      titre: 'Human Booster',
      numbreDePlace: 5,
      tarif: 5000,
      adresse: '5 Rue de l\'Europe, 69600 Oullins'
    },
      {
      image: 'https://etudestech.com/wp-content/uploads/2023/05/midjourney-scaled.jpeg',
      nom: 'Data science',
      stackTechnique: 'Human Booster',
      dates: '2023-05-01',
      titre: 'Human Booster',
      numbreDePlace: 5,
        tarif: 5000,
        adresse: '5 Rue de l\'Europe, 69600 Oullins'
    },
    {
      image: 'https://etudestech.com/wp-content/uploads/2023/05/midjourney-scaled.jpeg',
      nom: 'Devops',
      stackTechnique: 'Human Booster',
      dates: '2023-05-01',
      titre: 'Human Booster',
      numbreDePlace: 5,
      tarif: 5000,
      adresse: '5 Rue de l\'Europe, 69600 Oullins'
    },
      {
      image: 'https://etudestech.com/wp-content/uploads/2023/05/midjourney-scaled.jpeg',
      nom: 'infrastructure',
      stackTechnique: 'Human Booster',
      dates: '2023-05-01',
      titre: 'Human Booster',
      numbreDePlace: 5,
        tarif: 5000,
        adresse: '5 Rue de l\'Europe, 69600 Oullins'
    },
    {
      image: 'https://etudestech.com/wp-content/uploads/2023/05/midjourney-scaled.jpeg',
      nom: 'cybersecurity',
      stackTechnique: 'Human Booster',
      dates: '2023-05-01',
      titre: 'Human Booster',
      numbreDePlace: 5,
      tarif: 5000, 
      adresse: "1 place de la paix , 75000 Paris"
    },
  ]
  saveChanges(){
    alert("saved")
  }
 
  lieu(adresse: string) {
    for(let i = 0; i < this.courses.length; i++) {
      if(this.courses[i].adresse == adresse) {
        alert(this.courses[i].adresse) 
      }
    }
  }
}


