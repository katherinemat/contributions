import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { MainComponent } from './main/main.component';
import { TwitterComponent } from './twitter/twitter.component';

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
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
