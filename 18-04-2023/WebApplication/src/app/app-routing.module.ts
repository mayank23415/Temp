import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuardGuard } from './route-guard.guard';


import { CanDeactivateGuard } from './register/can-deactivate.guard';
import { CanLoadGuard } from './can-load.guard';

const routes: Routes = [
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule),
    canDeactivate:[CanDeactivateGuard]
  },
  {
    path: 'products',
    canActivate:[RouteGuardGuard],
    data: {
      role:['Admin']
    },
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
    canLoad: [CanLoadGuard],
    
  },
  {
    path: '',
    redirectTo:'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'home',
    canActivate:[RouteGuardGuard],
    data: {
      role:['User','Admin']
    },
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
