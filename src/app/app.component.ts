import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'payment';
  selectedCity: any;
  countries:Array<any> = ['USA', 'Canada', 'UK', 'Japan', 'France'];
}
