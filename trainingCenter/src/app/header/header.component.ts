import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CourseListComponent } from '../course-list/course-list.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,CourseListComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
