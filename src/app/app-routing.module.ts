import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';


const routes: Routes = [{path:'user', component:UserComponent},
{path:"**" ,pathMatch:'full',redirectTo:'user'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
