import { Component } from '@angular/core';
import { UserProps } from './models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'desafio-attornatus';
  users: Array<UserProps> = []

}
