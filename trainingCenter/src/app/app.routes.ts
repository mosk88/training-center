import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseListComponent } from './course-list/course-list.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'programmes', component: CourseListComponent },
    {path:'inscription',component:RegistrationFormComponent}
];
