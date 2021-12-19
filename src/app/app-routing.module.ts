import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './components/start/start.component';
import { ContactComponent } from './components/contact/contact.component';
import { WeusComponent } from './components/weus/weus.component';
import { ServComponent } from './components/serv/serv.component';
import { SigninComponent } from './components/signin/signin.component';
import { AdminComponent } from './components/admin/admin.component';
import { CreateproductComponent } from './components/createproduct/createproduct.component';
import { ModifyproductComponent } from './components/modifyproduct/modifyproduct.component';
import { ShopComponent } from './components/shop/shop.component';
import { ShoptypeproductComponent } from './components/shop/shoptypeproduct/shoptypeproduct.component';
import { DetailproductComponent } from './components/shop/detailproduct/detailproduct.component';
import { SummaryshopComponent } from './components/shop/summaryshop/summaryshop.component';
import { ModifyorderComponent } from './components/modifyorder/modifyorder.component';
import { CreateuserComponent } from './components/createuser/createuser.component';
import { ModifyuserComponent } from './components/modifyuser/modifyuser.component';
import { AppointmentComponent } from './components/appointment/appointment.component';

const routes: Routes = [
  {
  path: '',
  component: StartComponent
  },
  {
  path: 'contact',
  component: ContactComponent
  },
  {
  path: 'weus',
  component: WeusComponent
  },
  {
  path: 'services',
  component: ServComponent
  },
  {
  path: 'login',
  component: SigninComponent  
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'createproduct',
    component: CreateproductComponent
  },
  {
    path: 'modifyproduct',
    component: ModifyproductComponent
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'typeproduct',
    component: ShoptypeproductComponent
  },
  {
    path: 'detailproduct',
    component: DetailproductComponent
  },
  {
    path: 'summaryshop',
    component: SummaryshopComponent
  },
  {
    path: 'modifyorder',
    component: ModifyorderComponent
  },
  {
    path: 'createuser',
    component: CreateuserComponent
  },
  {
    path: 'modifyuser',
    component: ModifyuserComponent
  },
  {
    path: 'appointment',
    component: AppointmentComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
