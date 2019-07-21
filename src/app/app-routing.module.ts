import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DropdownComponent } from './main/dropdown/dropdown.component';
import { TableComponent } from './main/table/table.component';
import { ChartComponent } from './main/chart/chart.component';
import { FormComponent } from './main/form/form.component';
import { Demo1Component } from './Extra/demo1/demo1.component';
import { Demo2Component } from './Extra/demo2/demo2.component';
import { Demo3Component } from './Extra/demo3/demo3.component';
import { LoginComponent } from './main/login/login.component';


const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
{path: 'home', component: HomeComponent},
{path: 'dropdown', component: DropdownComponent},
{path: 'table', component: TableComponent},
{path: 'chart', component: ChartComponent},
{path: 'form', component: FormComponent},
{path: 'login', component: LoginComponent},
{path: 'demo1', component: Demo1Component},
{path: 'demo2', component: Demo2Component},
{path: 'demo3', component: Demo3Component},
{path: '**', component: PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponet = [HomeComponent, DropdownComponent, TableComponent,
   ChartComponent, FormComponent, LoginComponent, Demo1Component, Demo2Component, Demo3Component, PagenotfoundComponent];
