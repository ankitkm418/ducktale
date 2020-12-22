import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ToUpperCaseDirective } from './to-upper-case.directive';

import {NgxPaginationModule} from 'ngx-pagination';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ServiceService } from './service.service';




@NgModule({
  declarations: [
    AppComponent,
    ToUpperCaseDirective,
    EditComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgxPaginationModule
  
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
