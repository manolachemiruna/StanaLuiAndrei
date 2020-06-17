import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path:'book',component:BookComponent},
  {path:'home',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:"**",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
