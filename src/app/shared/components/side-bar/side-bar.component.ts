import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  options: any[] = [
    {
      name: 'Usuarios',
      icon: 'ti-user',
      // router: ['/', 'auth']
      router: ['/', ''] // '' envia a UserComponent
    },
    {
      name: 'Roles & Permisos',
      icon: 'ti-settings',
      router: ['/', 'roles']
    },
    {
      name: 'Programas & Periodos',
      icon: 'ti-book',
      router: ['/', 'programs'],
    },
    {
      name: 'Cursos',
      icon: 'ti-certificate',
      router: ['/', 'courses'],
    }
  ];

  constructor(private router: Router) { }
}
