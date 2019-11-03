import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampaignsComponent } from './Component/conent/campaigns/campaigns.component';
import { CartComponent } from './Component/conent/cart/cart.component';
import { PageNotFoundComponent } from './Component/main/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: 'Campagines',
    component: CampaignsComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'notFound',
    component: PageNotFoundComponent
  },

  {
    path: '',
    redirectTo: '/Campagines',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
