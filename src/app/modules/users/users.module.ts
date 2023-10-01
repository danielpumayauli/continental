import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    UsersPageComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
  ],
  exports: [
    UsersPageComponent,
  ]
})
export class UsersModule { }
