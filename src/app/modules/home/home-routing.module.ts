import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('@modules/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'roles',
    loadChildren: () => import('@modules/roles/roles.module').then(m => m.RolesModule)
  },
  {
    path: 'programs',
    loadChildren: () => import('@modules/programs/programs.module').then(m => m.ProgramsModule)
  },
  {
    path: 'courses',
    loadChildren: () => import('@modules/courses/courses.module').then(m => m.CoursesModule)
  },
  {
    path: '**',//TODO 404 cuando no existe la ruta
    redirectTo: '/users'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
