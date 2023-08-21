import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  data = {
    id: 1,
    cliente: 'João',
    valor: '53.000'
}
}
