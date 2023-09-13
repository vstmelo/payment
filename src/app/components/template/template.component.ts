import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {
  // @ViewChild(selector: 'container', opts:{read:ViewContainerRef} )
  // container!: ViewContainerRef;
  constructor(private router: Router) { }

  isRouteActive(routePath: string): boolean {
    return this.router.url=== routePath;
  }
}
