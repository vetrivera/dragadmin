import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppRoutingModule, routingComponet } from './app-routing.module';
import { AppComponent } from './app.component';
import {ChartsModule} from 'ng2-charts';
import { from } from 'rxjs';
import {FormsModule} from '@angular/forms';
import { MessageService } from './message.service';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [
    AppComponent,
    routingComponet
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     ChartsModule,
    HttpClientModule,
    BrowserAnimationsModule,
   DragDropModule,
   FormsModule,
   MatBadgeModule,
   MatIconModule,
   MatCardModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
