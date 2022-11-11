import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/tab/tab.module').then( m => m.TabPageModule)},
  {
    path: 'characters-details',
    loadChildren: () => import('./pages/characters-details/characters-details.module').then( m => m.CharactersDetailsPageModule)
  },
  {
    path: 'episodes-details',
    loadChildren: () => import('./pages/episodes-details/episodes-details.module').then( m => m.EpisodesDetailsPageModule)
  }

 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
