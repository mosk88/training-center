import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseListComponent } from './course-list/course-list.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'programmes', component: CourseListComponent }
];
