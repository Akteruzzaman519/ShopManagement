import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LaptopComponent } from './laptop/laptop.component';
import { MobileComponent } from './mobile/mobile.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'product', children:[
    {path:'', component: ProductComponent },
    { path: 'mobile', component: MobileComponent },
    { path: 'laptop', component: LaptopComponent }
  ]}
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
