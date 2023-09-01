import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/services/data';

interface IData {
  id: number;
  cliente: string;
  valor: string;
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() header: string | undefined;
  data!: IData[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getDatas().then((data: any) => {
      this.data = data;
    });
  }
}
