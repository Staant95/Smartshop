import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import {UserResolverService} from "../services/resolvers/user-resolver.service";
import {AuthGuard} from "../guards/auth.guard";

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'lists',
        loadChildren: () => import('../lists/lists.module').then(m => m.ListsPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule),
        canActivate: [AuthGuard],
        resolve: { user : UserResolverService }
      },
      {
        path: '',
        redirectTo: '/tabs/lists',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/lists',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
