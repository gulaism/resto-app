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
    },
    {
        path: 'discount', 
        loadComponent: () => import('./pages/discount-page/discount-page').then(m=>m.DiscountPage)
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard-page/dashboard-page').then(m=>m.DashboardPage)
    },
    {
        path: 'messages', 
        loadComponent: () => import('./pages/messages-page/messages-page').then(m=>m.MessagesPage)
    },
    {
        path: 'notifications',
        loadComponent: () => import('./pages/notifications-page/notifications-page').then(m=>m.NotificationsPage)
    },
    {
        path: 'logout',
        loadComponent: () => import('./pages/logout-page/logout-page').then(m=>m.LogoutPage)
    }
];
