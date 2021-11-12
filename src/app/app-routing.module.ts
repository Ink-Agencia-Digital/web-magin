import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoLogginGuard } from './_guards/no-loggin.guard';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./Pages/login/login.module').then(m => m.LoginPageModule),
    canActivate: [ NoLogginGuard ]
  },
  {
    path: 'olvidoc',
    loadChildren: () => import('./Pages/olvidoc/olvidoc.module').then(m => m.OlvidocPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./Pages/register/register.module').then(m => m.RegisterPageModule)
  },{
    path: 'slides',
    loadChildren: () => import('./Pages/slides/slides.module').then( m => m.SlidesPageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./Pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'avatar',
    loadChildren: () => import('./Pages/popup/avatar/avatar.module').then( m => m.AvatarPageModule)
  },
  {
    path: 'condiciones',
    loadChildren: () => import('./Pages/condiciones/condiciones.module').then( m => m.CondicionesPageModule)
  },
  {
    path: 'terminos-ninos',
    loadChildren: () => import('./Pages/terminos-ninos/terminos-ninos.module').then( m => m.TerminosNinosPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./Pages/help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'target',
    loadChildren: () => import('./Pages/target/target.module').then( m => m.TargetPageModule)
  },  {
    path: 'change-password',
    loadChildren: () => import('./Pages/change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
