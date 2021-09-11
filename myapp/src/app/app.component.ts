import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Ejercitate', url: '/ejercitate', icon: 'heart' },
    { title: 'Alimentate', url: '/alimentate', icon: 'Water' },
    { title: 'Informate', url: '/informate', icon: 'paper-plane' },
    { title: 'Motivate', url: '/motivate', icon: 'bicycle' },
  ];
  constructor() {}
}