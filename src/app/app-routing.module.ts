import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { AuthGuard } from './shared/gaurds/auth/auth.guard';

const routes: Routes = [
   {
    path:'',
    loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)
   },
   {
    path:'home',
    component:HomeComponent
    
   },
   {
    path:'posts',
    loadChildren:()=>import('./post/post.module').then(p=>p.PostModule),
    canActivate:[AuthGuard],
    canLoad:[AuthGuard]
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
