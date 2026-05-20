import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';

export const routes: Routes = [
    {
        path: '', 
        loadComponent: () => import('./pages/home-page/home-page').then(m=>m.HomePage)
    },
    {
        path: 'settings',
        loadComponent: () => import('./pages/settings-page/settings-page').then(m=>m.SettingsPage)
    }
];
