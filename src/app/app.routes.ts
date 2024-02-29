import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent: () => import('./person-form/person-form.component')
    },
    {
        path:'list',
        loadComponent: () => import('./person-list/person-list.component')
    },
    {
        path:'profile',
        loadComponent: () => import('./person-profile/person-profile.component')
    }
];
