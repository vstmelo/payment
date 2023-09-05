import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {
  // @ViewChild(selector: 'container', opts:{read:ViewContainerRef} )
  // container!: ViewContainerRef;

}
