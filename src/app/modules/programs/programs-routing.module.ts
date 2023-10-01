import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramsPageComponent } from './pages/programs-page/programs-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProgramsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramsRoutingModule { }
