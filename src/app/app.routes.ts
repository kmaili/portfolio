import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CVComponent} from "./c-v/c-v.component";
import {ProjectsComponent} from "./projects/projects.component";
import {InternshipsComponent} from "./internships/internships.component";
import {ContactComponent} from "./contact/contact.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cv', component: CVComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'internships', component: InternshipsComponent},
  {path: 'contact', component: ContactComponent}
];
