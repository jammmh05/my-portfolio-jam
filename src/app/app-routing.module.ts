import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontLayoutComponent } from './front/front-layout/front-layout.component';
import { HomeComponent } from './front/home/home.component';

const routes: Routes = [
  { path: '', component: FrontLayoutComponent, children:
    [ { path: '', component: HomeComponent} ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
