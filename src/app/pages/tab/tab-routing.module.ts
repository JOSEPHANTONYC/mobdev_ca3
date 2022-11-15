import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: 'tab',
    component: TabPage,
    children: [
  
  {
    path: 'characters',
    children: [
     { path: '',
    loadChildren: () => import('../characters/characters.module').then( m => m.CharactersPageModule)
  }, {
    path: ':id',
    loadChildren: () => import('../characters-details/characters-details.module').then( m => m.CharactersDetailsPageModule)
  }
]
  },
 
  {
    path: 'episodes',
    children: [
      { path: '',
    loadChildren: () => import('../episodes/episodes.module').then( m => m.EpisodesPageModule)
  },{
    path: ':id',
    loadChildren: () => import('../episodes-details/episodes-details.module').then( m => m.EpisodesDetailsPageModule)
  }
]
  },
  {
    path: 'quotes',
    children: [
      { path: '',
    loadChildren: () => import('../quotes/quotes.module').then( m => m.QuotesPageModule)
  }
]
  },
  
  {
    path: 'death-count',
    children: [
      { path: '',
    loadChildren: () => import('../death-count/death-count.module').then( m => m.DeathCountPageModule)
  }
]
  }
]
  },
  {
    path: '',
    redirectTo: '/tab/characters',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
