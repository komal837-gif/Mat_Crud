import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { PostDashboardComponent } from './post-dashboard/post-dashboard.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostCardComponent } from './post-card/post-card.component';


@NgModule({
  declarations: [
    PostDashboardComponent,
    PostFormComponent,
    PostCardComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class PostModule { }
