import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() header: string | undefined;
  @Input() subheader: string | undefined;
  @Input() id: string | number | undefined;
  @Input() cliente: string | number | undefined;
  @Input() valor: string | number | undefined;
  @Input() img: string | number | undefined;
  @Input() nome: string | number | undefined;
}
