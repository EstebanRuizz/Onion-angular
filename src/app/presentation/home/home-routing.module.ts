import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { PublicationsComponent } from './publications/publications.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [{ path: 'publications', component: PublicationsComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}