import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreweryTShirtsComponent } from './brewery-t-shirts/brewery-t-shirts.component';
import { BreweryAboutComponent } from './brewery-about/brewery-about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'camisetas',
    pathMatch: 'full'
  },
  {
    path: 'camisetas',
    component: BreweryTShirtsComponent
  },
  {
    path: 'acerca',
    component: BreweryAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
