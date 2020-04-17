import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateSchoolComponent} from './school/create-school/create-school.component';
import {ListSchoolComponent} from './school/list-school/list-school.component';
import {CreateAdministratorComponent} from './administrator/create-administrator/create-administrator.component';
import {ListAdministratorComponent} from './administrator/list-administrator/list-administrator.component';
import {CreateClassroomComponent} from './classroom/create-classroom/create-classroom.component';
import {ListClassroomComponent} from './classroom/list-classroom/list-classroom.component';


const routes: Routes = [
  { path: 'school/create', component: CreateSchoolComponent},
  { path: 'school/list', component: ListSchoolComponent},
  { path: 'administrator/create', component: CreateAdministratorComponent},
  { path: 'administrator/list', component: ListAdministratorComponent},
  { path: 'classroom/create', component: CreateClassroomComponent },
  { path: 'classroom/list', component: ListClassroomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
