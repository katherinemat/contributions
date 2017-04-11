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
    path: 'org-detail',
    component: OrgDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
