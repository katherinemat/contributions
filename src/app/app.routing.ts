import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { MainComponent } from './main/main.component';
import { TwitterComponent } from './twitter/twitter.component';
import { OrgDetailComponent } from './org-detail/org-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'twitter',
    component: TwitterComponent
  },
  {
<<<<<<< HEAD
    path: 'org/:id',
=======
    path: 'org-detail',
>>>>>>> ea8815e90b61d536314755d5f00063652075f89c
    component: OrgDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
