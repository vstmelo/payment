import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { LoginComponent } from './pages/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
@NgModule({
  declarations: [AppComponent, LoginComponent, SidebarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    CardModule,
    CascadeSelectModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
