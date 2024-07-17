import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CourseListComponent } from "../course-list/course-list.component";
import { filter } from 'rxjs';

@Component({
  selector: 'app-search-course',
  standalone: true,
  imports: [CommonModule, CourseListComponent],
  templateUrl: './search-course.component.html',
  styleUrl: './search-course.component.css'
})
export class SearchCourseComponent {
  numPlace: number = 14;
  isComplete: boolean = this.numPlace >= 15;

  courses  = [
    {
      image: 'https://plus.unsplash.com/premium_photo-1661778490723-371305b4fb06?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9ybWF0aW9ufGVufDB8fDB8fHww',
      nom: 'formation 01',
      stackTechnique: 'angular',
      dates: '2023-05-01',
      titre: 'Devops',
      numbreDePlace: 5,
      tarif: 5000,
      adresse: '1 Rue de l\'Europe, 75000 Paris'
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1661778490723-371305b4fb06?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9ybWF0aW9ufGVufDB8fDB8fHww',
      nom: 'formation 02',
      stackTechnique: 'angular',
      dates: '2023-05-01',
      titre: 'Devops',
      numbreDePlace: 5,
      tarif: 5000,
      adresse: '5 Rue de l\'Europe, 75000 Paris'
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1661778490723-371305b4fb06?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9ybWF0aW9ufGVufDB8fDB8fHww',
      nom: 'formation 03',
      stackTechnique: 'angular',
      dates: '2023-05-01',
      titre: 'Data science',
      numbreDePlace: 5,
      tarif: 5000,
      adresse: '5 Rue de l\'Europe, 75000 Paris'
    },
      {
      image: 'https://plus.unsplash.com/premium_photo-1661778490723-371305b4fb06?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9ybWF0aW9ufGVufDB8fDB8fHww',
      nom: 'formation 01',
      stackTechnique: 'angular',
      dates: '2023-05-01',
      titre: 'Data science',
      numbreDePlace: 5,
      tarif: 5000,
      adresse: '1 Rue de l\'Europe, 75000 Paris'
    },
        {
      image: 'https://plus.unsplash.com/premium_photo-1661778490723-371305b4fb06?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9ybWF0aW9ufGVufDB8fDB8fHww',
      nom: 'formation 03',
      stackTechnique: 'angular',
      dates: '2023-05-01',
      titre: 'IT',
      numbreDePlace: 5,
      tarif: 5000,
      adresse: '5 Rue de l\'Europe, 75000 Paris'
    },
      {
      image: 'https://plus.unsplash.com/premium_photo-1661778490723-371305b4fb06?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9ybWF0aW9ufGVufDB8fDB8fHww',
      nom: 'formation 01',
      stackTechnique: 'angular',
      dates: '2023-05-01',
      titre: 'IT',
      numbreDePlace: 5,
      tarif: 5000,
      adresse: '1 Rue de l\'Europe, 75000 Paris'
    },
  ];

 filteredCourses = [...this.courses];

  filterByTitle(event: any) {
    const value = event.target.value
    if (!value || value === 'list') {
      this.filteredCourses = [...this.courses];
    } else {
      this.filteredCourses = this.courses.filter(course => course.titre === value);
    }
  }
   

}