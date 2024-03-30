import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ViewTodoComponent } from './view-todo/view-todo.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:"add",
    component:AddTodoComponent,
    pathMatch:'full'
  },
  {
    path:"view",
    component:ViewTodoComponent,
    pathMatch:'full'
  },
  {
    path:"about",
    component:AboutComponent,
    pathMatch:'full'
  },
  {
    path:"contact",
    component:ContactComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
