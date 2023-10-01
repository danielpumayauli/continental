import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare function initMainTemplate():any;

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
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

  ngOnInit(): void {
    setTimeout(() => {
     initMainTemplate();
    });
   }
}
