import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeQRComponent } from './code-qr/code-qr.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  {path:"map", component :MapComponent},
  {path:"code", component :CodeQRComponent},
  {path:"**", component :CodeQRComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
